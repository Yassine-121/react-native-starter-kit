import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";

const CustomButton = ({ text, style, bgColor, textColor, onPress }) => {
    const styles = StyleSheet.create({
        button: {
            ...style,
            marginVertical: 10
        },
        text: {
            textAlign: "center"
        }
    })

  return(
      <Pressable onPress={onPress} style={[styles.button,
                         bgColor ? {backgroundColor: bgColor} : {}]}>
          <Text style={[styles.text,
                        textColor ? {color: textColor} : {color: 'black'}]}>{text}</Text>
      </Pressable>
  );
}

export default CustomButton;