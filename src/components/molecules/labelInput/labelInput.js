import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Input} from "../../atoms";
import {Colors} from '../../../styles';

const LabelInput = ({ label, placeholder, value, setValue, isSecure }) => {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>{label}</Text>
          <View>
              <Input value={value}
                     setValue={setValue}
                     placeholder={placeholder}
                     isSecure={isSecure} />
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 5,
    },
    text: {
        color: 'black',
    }
})

export default LabelInput;