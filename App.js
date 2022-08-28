import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useRoute } from "./Router/router";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  const routing = useRoute(isAuth);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar />
        {routing}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
