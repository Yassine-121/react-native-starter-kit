import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import LabelInput from "../molecules/labelInput/labelInput";
import {windowHeight, windowWidth} from "../../utils/theme";
import {Colors, Buttons} from '../../styles';
import CustomButton from "../atoms/button/customButton";
import {resetPassword} from "../../api/auth";
import Toast from "react-native-toast-message";
import {errors} from "../../styles/errors";

const ForgetPasswordForm = ({ navigation }) => {
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorsList, setErrorsList] = useState([]);

    const onResetPress = async () => {
        const data = {
            token: token,
            password: password,
            password_confirmation: confirmPassword
        }
        await resetPassword(data)
            .then(response => {
                setToken('')
                setPassword('')
                setConfirmPassword('')
                navigation.navigate('Login')
                Toast.show({
                    type: 'success',
                    visibilityTime: 5000,
                    text1: 'Password reset',
                    text2: response.data.messages
                })
            })
            .catch(error => {
                setErrorsList(error.response.data.messages)
            })
    };
  return (
      <View style={styles.container}>
          <Text style={styles.text}>{'Reset Password'}</Text>
          {
              errorsList.length !== 0 ? (
                  <View style={errors}>
                      {errorsList.map(
                          error => <Text key={error}>{error}</Text>
                      )}
                  </View>
              ) : null
          }
          <LabelInput label={'Token'}
                      value={token}
                      setValue={setToken}
                      placeholder={'Enter the token'}
                      isSecure={false}/>
          <LabelInput label={'Password'}
                      value={password}
                      setValue={setPassword}
                      placeholder={'Enter your password'}
                      isSecure={true}/>
          <LabelInput label={'Confirm Password'}
                      value={confirmPassword}
                      setValue={setConfirmPassword}
                      placeholder={'Confirm your password'}
                      isSecure={true}/>
          <CustomButton text={'Reset Password'}
                        style={Buttons.bigRounded}
                        bgColor={Colors.BUTTON_PRIMARY}
                        textColor={'white'}
                        onPress={onResetPress}
                        />
          <CustomButton text={'Back to login page'}
                        style={Buttons.bigRounded}
                        onPress={() => navigation.navigate('Login')} />
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
    }
})

export default ForgetPasswordForm;