import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { authSignInUser } from "../../redux/auth/authOperations";

const initialValue = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);
  const [state, setState] = useState(initialValue);

  const dispatch = useDispatch();

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
    dispatch(authSignInUser(state));
    setState(initialValue);
  };

  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/images/bgPhoto.jpg")}
    >
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View
          style={{ ...styles.form, paddingBottom: isShownKeyboard ? 160 : 60 }}
        >
          <Text style={styles.title}>Войти</Text>
          <View style={styles.inputWrapper}>
            <View style={{ marginTop: 16 }}>
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                onFocus={() => setIsShownKeyboard(true)}
                onSubmitEditing={keyboardHide}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                value={state.email}
              />
            </View>
            <View style={{ marginTop: 16, position: "relative" }}>
              <TextInput
                style={styles.inputPass}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => setIsShownKeyboard(true)}
                onSubmitEditing={keyboardHide}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                value={state.password}
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
            <Text style={styles.submitBtnText}>Войти</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.secondaryBtn}
          >
            <Text activeOpacity={0.8} style={styles.secondaryBtnText}>
              Нет аккаунта? Зарегистрироваться
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
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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

export default LoginScreen;
