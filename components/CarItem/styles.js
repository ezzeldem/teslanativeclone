import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carConyainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#5c5e62",
  },
  subitleCTA: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: 50,
  },
});

export default styles;
