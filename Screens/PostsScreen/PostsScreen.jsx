import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const PostsScreen = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Публикации</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ position: "absolute", top: 50, right: 20 }}
        >
          <Image source={require("../../assets/images/log-out.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.userWrapper}>
          <Image
            source={require("../../assets/images/photo.png")}
            style={styles.photo}
          />
          <View>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.navigationContainer}>
        <View style={styles.menuWrapper}>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              style={styles.menu}
              source={require("../../assets/images/grid.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.add}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              style={styles.user}
              source={require("../../assets/images/user.png")}
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
    paddingRight: 16,
    paddingLeft: 16,
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 32,
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

export default PostsScreen;
