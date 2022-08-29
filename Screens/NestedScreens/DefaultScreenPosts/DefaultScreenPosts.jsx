import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useDispatch } from "react-redux";

import { authSignOutUser } from "../../../redux/auth/authOperations";
import db from "../../../firebase/config";

const DefaultScreenPosts = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  const getAllPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  console.log("🚀 ~ posts", posts);
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Публикации</Text>
        <TouchableOpacity
          onPress={signOut}
          activeOpacity={0.8}
          style={{ position: "absolute", top: 50, right: 20 }}
        >
          <Image source={require("../../../assets/images/log-out.png")} />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.userWrapper}>
        <Image
          source={require("../../../assets/images/photo.png")}
          style={styles.photo}
        />
        <View>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View> */}
      <FlatList
        style={styles.mainContent}
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ alignItems: "center" }}>
            <View style={styles.publicationContainer} key={index}>
              <Image
                style={styles.publicationImage}
                source={{ uri: item.photo }}
              />
              <Text style={styles.publicationImageName}>{item.name}</Text>
              <View style={styles.locationWrapper}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                  }}
                  onPress={() =>
                    navigation.navigate("Comments", {
                      screen: "DefaultScreen",
                      postId: item.id,
                      photo: item.photo,
                    })
                  }
                >
                  <Image
                    style={styles.commentsImg}
                    source={require("../../../assets/images/Comments.png")}
                  />
                  <Text style={styles.commentsAmount}>0</Text>
                </TouchableOpacity>
                <View style={styles.locationTextWrapper}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                    }}
                    onPress={() =>
                      navigation.navigate("Map", {
                        longitude: item.longitude,
                        latitude: item.latitude,
                        screen: "DefaultScreen",
                        locationName: item.locationName,
                      })
                    }
                  >
                    <Image
                      style={styles.locationImg}
                      source={require("../../../assets/images/map-pin.png")}
                    />
                    <Text style={styles.locationText}>{item.locationName}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.navigationContainer}>
        <View style={styles.menuWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DefaultScreen")}
            activeOpacity={0.8}
          >
            <Image
              style={styles.menu}
              source={require("../../../assets/images/grid.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CreatePosts", { screen: "DefaultScreen" })
            }
            activeOpacity={0.8}
            style={styles.add}
          >
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            activeOpacity={0.8}
          >
            <Image
              style={styles.user}
              source={require("../../../assets/images/user.png")}
            />
          </TouchableOpacity>
        </View>
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
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 32,
    marginHorizontal: 16,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  name: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
  publicationContainer: {
    marginHorizontal: 16,
    marginBottom: 34,
  },
  publicationImage: {
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  publicationImageName: {
    marginTop: 8,
    fontFamily: "Roboto-Medium",
    color: "#212121",
    fontSize: 16,
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 11,
  },
  commentsImg: {
    width: 18,
    height: 18,
    marginRight: 9,
  },
  commentsAmount: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    width: 50,
  },
  locationTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 250,
  },
  locationImg: {
    width: 18,
    height: 24,
    marginRight: 8,
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    textDecorationLine: "underline",
  },
  navigationContainer: {
    position: "relative",
    height: 83,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.2,
  },
  menuWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    width: 24,
    height: 24,
  },
  add: {
    marginHorizontal: 43,
    width: 70,
    height: 51,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  addText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  user: {
    width: 24,
    height: 24,
  },
});

export default DefaultScreenPosts;
