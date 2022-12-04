import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../pages/login";
import SingUpScreen from "../pages/singUp";
import ForgetPasswordMailScreen from "../pages/forgetPasswordMail";
import ForgetPasswordForm from "../components/organisms/forgetPasswordForm";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SingUpScreen} />
                <Stack.Screen name="ForgetPasswordMail" component={ForgetPasswordMailScreen} />
                <Stack.Screen name="ForgetPassword" component={ForgetPasswordForm} />
            </Stack.Navigator>
            <Toast />
        </>
    );
}

export default AuthNavigation;
