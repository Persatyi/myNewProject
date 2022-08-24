import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

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

  const onSubmit = () => {
    console.log(state);
  };

  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/images/bgPhoto.jpg")}
      onPress={hideKeyboard}
    >
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View
          style={{
            ...styles.form,
            paddingTop: isShownKeyboard ? 30 : 92,
            paddingBottom: isShownKeyboard ? 160 : 60,
          }}
        >
          <View
            style={{
              ...styles.pictureWrapper,
              display: isShownKeyboard ? "none" : "flex",
            }}
          >
            <Image
              style={styles.picture}
              source={require("../../assets/images/placeholder.png")}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ position: "absolute", top: 80, right: -12 }}
            >
              <Image source={require("../../assets/images/add.png")} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Регистрация</Text>
          <View style={styles.inputWrapper}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Логин"
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
                value={state.login}
                onFocus={() => setIsShownKeyboard(true)}
                onSubmitEditing={keyboardHide}
              />
            </View>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                value={state.email}
                onFocus={() => setIsShownKeyboard(true)}
                onSubmitEditing={keyboardHide}
              />
            </View>
            <View style={{ marginTop: 16, position: "relative" }}>
              <TextInput
                style={styles.inputPass}
                placeholder="Пароль"
                secureTextEntry={true}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                value={state.password}
                onFocus={() => setIsShownKeyboard(true)}
                onSubmitEditing={keyboardHide}
              />
              <View style={{ position: "absolute", top: 0, right: 16 }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.secondaryBtn}
                >
                  <Text style={styles.secondaryBtnText}>Показать</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.submitBtn}
            onPress={onSubmit}
          >
            <Text style={styles.submitBtnText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.secondaryBtn}
          >
            <Text activeOpacity={0.8} style={styles.secondaryBtnText}>
              Уже есть аккаунт? Войти
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    width: 375,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  pictureWrapper: {
    position: "absolute",
    top: -60,
    left: 128,
  },
  picture: {
    width: 120,
    height: 120,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
  },
  inputWrapper: {
    marginTop: 33,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
    color: "#BDBDBD",
  },
  inputPass: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    paddingLeft: 16,
    paddingRight: 90,
    color: "#BDBDBD",
  },
  submitBtn: {
    marginTop: 43,
    height: 51,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  submitBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#ffffff",
  },
  secondaryBtn: {
    marginTop: 16,
    borderColor: "transparent",
  },
  secondaryBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
