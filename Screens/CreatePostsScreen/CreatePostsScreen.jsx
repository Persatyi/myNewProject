import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";

const CreatePostsScreen = ({ navigation, route }) => {
  const { screen } = route.params;

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
      <SafeAreaView style={styles.mainContent}>
        <ScrollView>
          <View style={styles.photoWrapper}>
            <Image
              source={require("../../assets/images/Photo-placeholder.png")}
              style={styles.photo}
            />
            <Image
              source={require("../../assets/images/Camera.png")}
              style={styles.camera}
            />
          </View>
          <View>
            <Text style={styles.photoDownload}>Загрузите фото</Text>
          </View>
          <View style={styles.photoNameWrapper}>
            <TextInput style={styles.photoName} placeholder="Название..." />
          </View>
          <View style={styles.locationWrapper}>
            <TextInput style={styles.location} placeholder="Местность..." />
            <Image
              source={require("../../assets/images/map-pin.png")}
              style={styles.map}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.createBtn}>
            <Text style={styles.createBtnText}>Опубликовать</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.navigationContainer}>
        <TouchableOpacity activeOpacity={0.8} style={styles.remove}>
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
    paddingTop: 32,
    marginHorizontal: 16,
  },
  photo: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  camera: {
    position: "absolute",
    top: 120,
    left: 140,
    width: 60,
    height: 60,
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
    marginBottom: 20,
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
