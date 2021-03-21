import * as React from 'react';
import SettingsScreen from 'screens/settingsScreen';
import { createStackNavigator } from '@react-navigation/stack';

interface SettingsStackNavigatorProps {}

const SettingsStack = createStackNavigator()

const SettingsStackNavigator: React.FC<SettingsStackNavigatorProps> = (props) => {
    return(
        <SettingsStack.Navigator screenOptions={{headerShown: false}}>
            <SettingsStack.Screen name={'SettingsScreen'} component={SettingsScreen} />
        </SettingsStack.Navigator>
    );
};

export default SettingsStackNavigator;
