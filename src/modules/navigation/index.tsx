import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import DrawerNavigation from './drawerNavigator';
import { IMobxStore, useStore } from '../mobx';

interface RootNavigationProps {}

const RootNavigation: React.FC<RootNavigationProps> = (props) => {
    const { AppStore: { theme } }: IMobxStore = useStore();

    return (
        <NavigationContainer theme={theme}>
            <DrawerNavigation />
        </NavigationContainer>
    );
};

export default RootNavigation;
