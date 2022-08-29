import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  FlatList,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import db from "../../../firebase/config";

const CommentsScreen = ({ navigation, route }) => {
  const { screen, postId, photo } = route.params;
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { nickname } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((data) =>
        setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  const createPost = () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, nickname });
    hideKeyboard();
    setComment("");
  };

  const hideKeyboard = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  const keyboardHide = () => {
    if ("on submit") {
      setIsShownKeyboard(false);
      Keyboard.dismiss();
    }
  };

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Комментарии</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(`${screen}`)}
          activeOpacity={0.8}
          style={{ position: "absolute", bottom: 8, left: 20 }}
        >
          <Image source={require("../../../assets/images/arrow-left.png")} />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.mainContent}>
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.photoWrapper}>
              <Image source={{ uri: photo }} style={styles.photo} />
            </View>
          )}
          data={allComments}
          renderItem={({ item }) => (
            <>
              {item.nickname === nickname ? (
                <View style={styles.commentWrapper}>
                  <View style={styles.textContainer}>
                    <Text style={styles.textMessage}>{item.comment}</Text>
                    <Text style={styles.answerDate}>09 июня, 2020 | 09:14</Text>
                  </View>
                  <Image
                    source={require("../../../assets/images/user2.png")}
                    style={styles.ownerLogo}
                  />
                </View>
              ) : (
                <View style={styles.commentWrapper}>
                  <Image
                    source={require("../../../assets/images/user1.png")}
                    style={styles.userLogo}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.textMessage}>{item.comment}</Text>
                    <Text style={styles.date}>09 июня, 2020 | 08:40</Text>
                  </View>
                </View>
              )}
            </>
          )}
        />
      </SafeAreaView>

      <View
        style={{
          ...styles.navigationContainer,
          marginBottom: isShownKeyboard ? 250 : 0,
        }}
      >
        <TextInput
          placeholder="Комментировать..."
          style={styles.commentInput}
          onFocus={() => setIsShownKeyboard(true)}
          onSubmitEditing={keyboardHide}
          onBlur={hideKeyboard}
          onChangeText={setComment}
        />
        <TouchableOpacity
          onPress={createPost}
          activeOpacity={0.8}
          style={styles.commentBtn}
        >
          <Image
            style={styles.trashBox}
            source={require("../../../assets/images/arrowUp.png")}
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
    marginBottom: 32,
  },
  photo: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    width: 343,
    height: 240,
    borderRadius: 8,
  },
  commentWrapper: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 24,
  },
  userLogo: {
    width: 28,
    height: 28,
    marginRight: 16,
  },
  ownerLogo: {
    width: 28,
    height: 28,
    marginLeft: 16,
  },
  textContainer: {
    position: "relative",
    width: 299,
    paddingTop: 16,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 35,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  textMessage: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#212121",
  },
  date: {
    position: "absolute",
    bottom: 16,
    right: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#BDBDBD",
  },
  answerDate: {
    position: "absolute",
    bottom: 16,
    left: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#BDBDBD",
  },
  navigationContainer: {
    position: "relative",
    height: 83,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  commentInput: {
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
    paddingLeft: 16,
    paddingRight: 40,
    fontFamily: "Inter-Medium",
    color: "#BDBDBD",
    fontSize: 16,
    marginHorizontal: 16,
  },
  commentBtn: {
    position: "absolute",
    top: 25,
    right: 25,
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 34,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
});

export default CommentsScreen;
