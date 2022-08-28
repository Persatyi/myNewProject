import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ navigation, route }) => {
  const { latitude, longitude, screen, locationName } = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(`${screen}`)}
        activeOpacity={0.8}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 100 }}
      >
        <Image source={require("../../../assets/images/arrow-left.png")} />
      </TouchableOpacity>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude,
          latitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{ longitude, latitude }}
          title={`${locationName}`}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
  },
});

export default MapScreen;
