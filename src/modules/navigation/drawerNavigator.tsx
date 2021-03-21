import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigator from './mainStackNavigator';
import SettingsStackNavigator from './settingsStackNavigator';

interface DrawerNavigationProps {}

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC<DrawerNavigationProps> = (props) => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name={'MainStack'} component={MainStackNavigator} />
            <Drawer.Screen name={'SettingsStack'} component={SettingsStackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
