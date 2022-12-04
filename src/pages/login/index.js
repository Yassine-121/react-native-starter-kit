import React from "react";
import {View} from "react-native";
import {LoginForm} from "../../components/organisms";

const LoginScreen = ({ navigation }) => {
  return(
    <View>
      <LoginForm navigation={navigation}/>
    </View>
  );
}

export default LoginScreen;
