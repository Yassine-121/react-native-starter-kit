import React from "react";
import {View} from "react-native";
import {ForgetPasswordForm} from "../../components/organisms";

const ForgetPassword = ({ navigation }) => {
    return(
        <View>
            <ForgetPasswordForm navigation={navigation} />
        </View>
    );
}

export default ForgetPassword;