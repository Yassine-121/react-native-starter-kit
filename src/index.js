import 'react-native-gesture-handler';
import React, {useEffect, useMemo, useReducer} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigation from "./navigations/authNavigation";
import AppNavigation from "./navigations/appNavigation";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ActivityIndicator, View} from "react-native";
import {AuthContext} from "./context/authContext";
import {getData, removeData} from "./utils/localStorage";

const App = () => {
    const initialLoginState = {
        isLoading: true,
        user: null,
        userToken: null
    };

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    user: action.email,
                    userToken: action.token,
                    isLoading: false
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    user: null,
                    userToken: null,
                    isLoading: false
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    user: action.user,
                    userToken: action.token,
                    isLoading: false
                };
        }
    }

    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

    const authContext = useMemo(() => ({
        signIn: async (user, userToken) => {
            dispatch({ type: 'LOGIN',
                user: user,
                token: userToken})
        },
        signOut: async () => {
            await removeData('user_token')
            dispatch({ type: 'LOGOUT'})
        },
        signUp: () => {},
    }), []);

    useEffect(() => {
        setTimeout(async () => {
            let userToken = null;
            userToken = await getData('user_token')
            console.info(userToken)
            dispatch({ type: 'RETRIEVE_TOKEN',
                token: userToken
            })
        }, 1000);
    }, []);

    if ( loginState.isLoading )
    {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

  return(
      <SafeAreaProvider>
          <AuthContext.Provider value={authContext}>
              <NavigationContainer>
                      {!loginState.userToken ? <AuthNavigation /> : <AppNavigation />}
              </NavigationContainer>
          </AuthContext.Provider>
      </SafeAreaProvider>
  );
}

export default App