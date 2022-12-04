import React, {useState} from "react";
import SocialButton from "../molecules/socialButton/socialButton";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import LabelInput from "../molecules/labelInput/labelInput";
import {windowHeight, windowWidth} from "../../utils/theme";
import {Colors, Buttons} from '../../styles';
import CustomButton from "../atoms/button/customButton";
import {register} from "../../api/auth";
import Toast from "react-native-toast-message";
import {errors} from "../../styles/errors";

const SignUpForm = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorsList, setErrorsList] = useState([]);

    const onSignUpPress = async () => {
        const data = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        }
        await register(data)
            .then(response => {
                setName('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                Toast.show({
                    type: 'success',
                    visibilityTime: 5000,
                    text1: 'Check you email address for verification'
                })
            })
            .catch(error => {
                setErrorsList(error.response.data.messages)
            })
    };

  return (
      <ScrollView>
          <View style={styles.container}>
              <Text style={styles.text}>{'Sign Up to QuizMakr'}</Text>
              <SocialButton />
              {
                  errorsList.length !== 0 ? (
                      <View style={errors}>
                          {errorsList.map(
                              error => <Text key={error}>{error}</Text>
                          )}
                      </View>
                  ) : null
              }
              <LabelInput label={'Full Name'}
                          value={name}
                          setValue={setName}
                          placeholder={'Enter your Full name'}
                          isSecure={false}/>
              <LabelInput label={'Email address'}
                          value={email}
                          setValue={setEmail}
                          placeholder={'Enter your email address'}
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
              <CustomButton text={'Sign Up'}
                            style={Buttons.bigRounded}
                            bgColor={Colors.BUTTON_PRIMARY}
                            textColor={'white'}
                            onPress={onSignUpPress}
              />
              <CustomButton text={'Back to Sign In Page'}
                            style={Buttons.bigRounded}
                            textColor={Colors.PRIMARY_COLOR}
                            onPress={() => {navigation.navigate('Login')}}
              />
          </View>
      </ScrollView>
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

export default SignUpForm;