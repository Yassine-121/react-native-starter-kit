import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import LabelInput from "../molecules/labelInput/labelInput";
import {PRIMARY, windowHeight, windowWidth} from "../../utils/theme";
import {Colors, Buttons} from '../../styles';
import CustomButton from "../atoms/button/customButton";
import {forgotPassword} from "../../api/auth";
import Toast from "react-native-toast-message";
import {errors} from "../../styles/errors";

const ForgetPasswordMailForm = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [errorsList, setErrorsList] = useState([]);

    const onResetPress = async () => {
        const data = {
            email: email
        }
        await forgotPassword(data)
            .then(response => {
                setEmail('')
                navigation.navigate('ForgetPassword')
                Toast.show({
                    type: 'success',
                    visibilityTime: 5000,
                    text1: 'Reset Password',
                    text2: response.data.messages
                })
            })
            .catch(error => {
                setErrorsList(error.response.data.messages)
            })
    };
  return (
      <View style={styles.container}>
          <Text style={styles.text}>{'Forgot Password'}</Text>
          <Text style={styles.sub}>Forgot your password? No problem. Just let us know your email address and we will email you a password reset code that will allow you to choose a new one.</Text>
          {
              errorsList.length !== 0 ? (
                  <View style={errors}>
                      {errorsList.map(
                          error => <Text key={error}>{error}</Text>
                      )}
                  </View>
              ) : null
          }
          <LabelInput label={'Email address'}
                      value={email}
                      setValue={setEmail}
                      placeholder={'Enter your email address'}
                      isSecure={false}/>
          <CustomButton text={'Send reset Link'}
                        style={Buttons.bigRounded}
                        bgColor={Colors.BUTTON_PRIMARY}
                        textColor={'white'}
                        onPress={onResetPress}/>
          <CustomButton text={'Back to login page'}
                        style={Buttons.bigRounded}
                        textColor={Colors.PRIMARY_COLOR}
                        onPress={() => {navigation.navigate("Login")}} />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 50,
    },
    text: {
        color: Colors.PRIMARY_COLOR,
        fontSize: 30,
        marginBottom : 15,
    },
    sub: {
        color: '#295d5c',
        textAlign: "center",
        marginVertical : 5,
    }
})

export default ForgetPasswordMailForm;