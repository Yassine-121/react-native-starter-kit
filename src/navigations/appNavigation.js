import React, {useContext} from "react";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import DashboardScreen from "../pages/dashboard";
import { AuthContext } from "../context/authContext";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    const { signOut } = useContext(AuthContext);
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label={"Sign out"} onPress={ () => { signOut() }} />
        </DrawerContentScrollView>
    );
}

const AppNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name={"Dashboard"} component={DashboardScreen} />
        </Drawer.Navigator>
    );
}

export default AppNavigation;