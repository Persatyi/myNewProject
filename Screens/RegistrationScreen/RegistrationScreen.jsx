import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

const RegistrationScreen = () => {
  const [isShownKeyboard, setIsShownKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={{ ...styles.form, marginBottom: isShownKeyboard ? 90 : 0 }}>
        <View style={styles.pictureWrapper}>
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
              onFocus={() => setIsShownKeyboard(true)}
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              onFocus={() => setIsShownKeyboard(true)}
            />
          </View>
          <View style={{ marginTop: 16, position: "relative" }}>
            <TextInput
              style={styles.inputPass}
              placeholder="Пароль"
              secureTextEntry={true}
              onFocus={() => setIsShownKeyboard(true)}
            />
            <View style={{ position: "absolute", top: 0, right: 16 }}>
              <TouchableOpacity activeOpacity={0.8} style={styles.secondaryBtn}>
                <Text style={styles.secondaryBtnText}>Показать</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.submitBtn}>
          <Text>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryBtn}>
          <Text activeOpacity={0.8} style={styles.secondaryBtnText}>
            Уже есть аккаунт? Войти
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  form: {
    position: "relative",
    width: 375,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 50,
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
  secondaryBtn: {
    marginTop: 16,
    borderColor: "transparent",
  },
  secondaryBtnText: {
    textAlign: "center",
    color: "#1B4371",
  },
});

export default RegistrationScreen;
