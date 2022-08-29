import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  Keyboard,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useSelector } from "react-redux";

import db from "../../firebase/config";

const initialValue = {
  name: "",
  locationName: "",
  latitude: "",
  longitude: "",
};

const CreatePostsScreen = ({ navigation, route }) => {
  const { screen } = route.params;
  const [state, setState] = useState(initialValue);
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const { userId, nickname } = useSelector((state) => state.auth);

  const keyboardHide = () => {
    if ("on submit") {
      setIsShownKeyboard(false);
      Keyboard.dismiss();
    }
  };

  const hideKeyboard = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();

    const location = await Location.getCurrentPositionAsync();
    setPhoto(photo.uri);
    setState((prevState) => ({
      ...prevState,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    }));
  };

  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();

    const uniquePostId = Date.now().toString();

    await db.storage().ref(`postImage/${uniquePostId}`).put(file);

    const processedPhoto = await db
      .storage()
      .ref("postImage")
      .child(uniquePostId)
      .getDownloadURL();

    return processedPhoto;
  };

  const uploadPostToServer = async () => {
    const photo = await uploadPhotoToServer();
    await db
      .firestore()
      .collection("posts")
      .add({ ...state, photo, userId, nickname });
  };

  const sendPhoto = async () => {
    uploadPostToServer();
    navigation.navigate("DefaultScreen");
    setState(initialValue);
    setPhoto("");
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  });

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Создать публикацию</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(`${screen}`)}
          activeOpacity={0.8}
          style={{ position: "absolute", bottom: 8, left: 20 }}
        >
          <Image source={require("../../assets/images/arrow-left.png")} />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.mainContent} onPress={hideKeyboard}>
        <ScrollView>
          <View style={styles.photoWrapper}>
            {photo && (
              <View style={styles.takePhotoContainer}>
                <Image
                  source={{ uri: photo }}
                  style={{ width: 343, height: 240, borderRadius: 8 }}
                />
              </View>
            )}
            <Camera style={styles.camera} type={type} ref={setCamera} />
            <TouchableOpacity
              onPress={takePhoto}
              style={styles.cameraBtn}
              activeOpacity={0.8}
            >
              <Image source={require("../../assets/images/Camera.png")} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.photoDownload}>Загрузите фото</Text>
          </View>
          <View style={styles.photoNameWrapper}>
            <TextInput
              style={styles.photoName}
              onFocus={() => setIsShownKeyboard(true)}
              onSubmitEditing={keyboardHide}
              clearButtonMode="always"
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, name: value }))
              }
              placeholder="Название..."
            />
          </View>
          <View style={styles.locationWrapper}>
            <TextInput
              style={styles.location}
              onFocus={() => setIsShownKeyboard(true)}
              clearButtonMode="always"
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, locationName: value }))
              }
              placeholder="Местность..."
            />
            <Image
              source={require("../../assets/images/map-pin.png")}
              style={styles.map}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={sendPhoto}
            style={{
              ...styles.createBtn,
              marginBottom: isShownKeyboard ? 100 : 20,
            }}
          >
            <Text style={styles.createBtnText}>Опубликовать</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={() => setPhoto("")}
          activeOpacity={0.8}
          style={styles.remove}
        >
          <Image
            style={styles.trashBox}
            source={require("../../assets/images/trash-box.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "relative",
    height: 88,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.2,
  },
  header: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    color: "#212121",
    marginBottom: 11,
  },
  mainContent: {
    flex: 2,
  },
  photoWrapper: {
    position: "relative",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginTop: 32,
    marginHorizontal: 16,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
  },
  camera: {
    width: 343,
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#F6F6F6",
  },
  cameraBtn: {
    position: "absolute",
    top: 90,
    left: 140,
    width: 60,
    height: 60,
    zIndex: 200,
  },
  photoDownload: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    marginHorizontal: 16,
  },
  photoNameWrapper: {
    marginTop: 40,
    marginHorizontal: 16,
  },
  photoName: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    paddingBottom: 15,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  locationWrapper: {
    position: "relative",
    marginTop: 30,
    marginHorizontal: 16,
  },
  map: {
    position: "absolute",
    bottom: 15,
    left: 0,
  },
  location: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    paddingBottom: 15,
    paddingLeft: 28,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  createBtn: {
    marginTop: 43,
    height: 51,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginHorizontal: 16,
  },
  createBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  navigationContainer: {
    position: "relative",
    height: 83,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  remove: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  trashBox: {
    width: 24,
    height: 24,
  },
});

export default CreatePostsScreen;
