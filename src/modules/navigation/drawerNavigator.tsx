import * as React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigator from './mainStackNavigator';

interface DrawerNavigationProps {}

const Drawer = createDrawerNavigator();

const DrawerNavigation: React.FC<DrawerNavigationProps> = (props) => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name={'MainStack'} component={MainStackNavigator} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
