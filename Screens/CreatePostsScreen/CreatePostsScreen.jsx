import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const CreatePostsScreen = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Создать публикацию</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ position: "absolute", bottom: 8, left: 20 }}
        >
          <Image source={require("../../assets/images/arrow-left.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
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
  photoWrapper: {
    position: "relative",
    alignItems: "center",
    paddingTop: 32,
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

export default CreatePostsScreen;
