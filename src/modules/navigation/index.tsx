import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import DrawerNavigation from './drawerNavigator';

interface RootNavigationProps {}

const RootNavigation: React.FC<RootNavigationProps> = (props) => {
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    );
};

export default RootNavigation;
