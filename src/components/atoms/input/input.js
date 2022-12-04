import React from "react";
import {TextInput, StyleSheet} from "react-native";
import {PADDING} from "../../../utils/theme";

const Input = ({ placeholder, value, setValue, isSecure }) => {
    return (
      <TextInput style={styles.textInput}
                 value={value}
                 onChangeText={setValue}
                 placeholder={placeholder}
                 placeholderTextColor={'grey'}
                 secureTextEntry={isSecure}
                 />
    );
}

const styles = StyleSheet.create({
    textInput:{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        padding: PADDING,
        color: 'grey'
    }
})

export default Input;