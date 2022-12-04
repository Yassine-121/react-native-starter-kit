import React from "react";
import {View} from "react-native";
import {SignUpForm} from "../../components/organisms";

const SingUpScreen = ({ navigation }) => {
  return(
      <View>
          <SignUpForm navigation={navigation}/>
      </View>
  );
}

export default SingUpScreen;
