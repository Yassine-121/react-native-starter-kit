import React, {useContext, useState} from "react";
import SocialButton from "../molecules/socialButton/socialButton";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import LabelInput from "../molecules/labelInput/labelInput";
import {windowHeight, windowWidth} from "../../utils/theme";
import {Colors, Buttons} from '../../styles';
import CustomButton from "../atoms/button/customButton";
import {AuthContext} from "../../context/authContext";
import {login} from "../../api/auth";
import {getData, storeData} from "../../utils/localStorage";
import {errors} from "../../styles/errors";

const LoginForm = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorsList, setErrorsList] = useState([]);
    const { signIn } = useContext(AuthContext);

    const onSignInPress = async () => {
        let userToken = null;
        let user = null;
        const data = {
            email: email,
            password: password
        }
        await login(data)
            .then(response => {
                setEmail('')
                setPassword('')
                storeData('user_token', response.data.token)
                storeData('user_info', response.data.user)
                userToken = getData('user_token')
                user = getData('user_info')
            })
            .catch(error => {
                setErrorsList(error.response.data.messages)
            })
        signIn(user, userToken)
    };

  return (
      <ScrollView>
          <View style={styles.container}>
              <Text style={styles.text}>{'Sign In to QuizMakr'}</Text>
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
              <CustomButton text={'Sign In'}
                            style={Buttons.bigRounded}
                            bgColor={Colors.BUTTON_PRIMARY}
                            textColor={'white'}
                            onPress={onSignInPress}
              />
              <CustomButton text={'Register'}
                            style={Buttons.bigRounded}
                            textColor={Colors.PRIMARY_COLOR}
                            onPress={() => {navigation.navigate("SignUp")}}
              />
              <CustomButton text={'Forgot password ?'}
                            style={Buttons.bigRounded}
                            textColor={Colors.PRIMARY_COLOR}
                            onPress={() => {navigation.navigate("ForgetPasswordMail")}} />
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

export default LoginForm;