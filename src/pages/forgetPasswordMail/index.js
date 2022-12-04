import React from "react";
import {ScrollView, View} from "react-native";
import {ForgetPasswordMailForm} from "../../components/organisms";

const ForgetPasswordMailScreen = ({ navigation }) => {
    return(
        <ScrollView>
            <ForgetPasswordMailForm navigation={navigation} />
        </ScrollView>
    );
}

export default ForgetPasswordMailScreen;