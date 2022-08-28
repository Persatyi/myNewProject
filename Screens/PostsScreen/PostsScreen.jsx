import {} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultScreenPosts from "../NestedScreens/DefaultScreenPosts/DefaultScreenPosts";
import CommentsScreen from "../NestedScreens/CommentsScreen/CommentsScreen";
import MapScreen from "../NestedScreens/MapScreen/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          headerShown: false,
          tabBarShowLabel: false,
        })}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          headerShown: false,
          tabBarShowLabel: false,
        })}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          headerShown: false,
          tabBarShowLabel: false,
        })}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
