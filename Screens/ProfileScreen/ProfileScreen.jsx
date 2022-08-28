import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/images/bgPhoto.jpg")}
    >
      <SafeAreaView style={styles.mainContent}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={styles.ownerPhotoWrapper}>
              <Image
                source={require("../../assets/images/profilePhoto.png")}
                style={styles.ownerPhoto}
              />
              <TouchableOpacity style={styles.removePhoto} activeOpacity={0.8}>
                <Image
                  source={require("../../assets/images/removePhoto.png")}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ position: "absolute", top: 23, right: 20 }}
            >
              <Image source={require("../../assets/images/log-out.png")} />
            </TouchableOpacity>
            <Text style={styles.ownerName}>Natali Romanova</Text>
            <View style={styles.postWrapper}>
              <Image
                style={styles.postImage}
                source={require("../../assets/images/Forest.png")}
              />
              <Text style={styles.postImageName}>Лес</Text>
              <View style={styles.postInfoWrapper}>
                <Image
                  style={styles.postInfoCommentsImg}
                  source={require("../../assets/images/Shape.png")}
                />
                <Text style={styles.amountOfComments}>8</Text>
                <Image
                  style={styles.postLikeImg}
                  source={require("../../assets/images/thumbs-up.png")}
                />
                <Text style={styles.amountOfComments}>153</Text>
                <View style={styles.locationTextWrapper}>
                  <Image
                    style={styles.locationImg}
                    source={require("../../assets/images/map-pin.png")}
                  />
                  <Text style={styles.locationText}>Ukraine</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.navigationContainer}>
        <View style={styles.menuWrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Posts")}
            activeOpacity={0.8}
          >
            <Image
              style={styles.menu}
              source={require("../../assets/images/grid.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            activeOpacity={0.8}
            style={styles.add}
          >
            <Image
              style={styles.user}
              source={require("../../assets/images/userWhite.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CreatePosts", { screen: "Profile" })
            }
            activeOpacity={0.8}
          >
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  mainContent: {
    flex: 2,
  },
  headerContainer: {
    position: "relative",
    alignItems: "center",
    paddingTop: 92,
    marginTop: 120,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  ownerPhotoWrapper: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    marginBottom: 32,
  },
  ownerPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  removePhoto: {
    position: "absolute",
    bottom: 20,
    right: -7,
    width: 25,
    height: 25,
    zIndex: 1000,
  },
  ownerName: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
    paddingBottom: 15,
  },
  postWrapper: {
    marginTop: 15,
    paddingBottom: 15,
  },
  postImage: {
    width: 343,
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
  },
  postImageName: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    marginTop: 8,
  },
  postInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 11,
  },
  postInfoCommentsImg: {
    width: 18,
    height: 18,
    marginRight: 9,
  },
  amountOfComments: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    width: 35,
  },
  postLikeImg: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  locationTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 210,
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
    fontSize: 30,
    color: "rgba(33, 33, 33, 0.8)",
  },
  user: {
    width: 24,
    height: 24,
  },
});

export default ProfileScreen;
