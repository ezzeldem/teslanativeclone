import React from "react";
import { View, ImageBackground, Text } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, tagLineCTA, image } = props.car;

  return (
    <View style={styles.carConyainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subitle}>
          {tagline} <Text style={styles.subitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type='primary'
          content='Custom Order'
          onPress={() => console.warn("Custom Order")}
        />
        <StyledButton
          type='sacondary'
          content='Existing Inventory'
          onPress={() => console.warn("Existing Inventory")}
        />
      </View>
    </View>
  );
};

export default CarItem;
