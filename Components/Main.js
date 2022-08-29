import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "../Router/router";
import { authStateChangeUser } from "../redux/auth/authOperations";

const Main = ({ onLayout }) => {
  const dispatch = useDispatch();
  const { stateChange } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  const routing = useRoute(stateChange);

  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayout}>
        <StatusBar />
        {routing}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Main;
