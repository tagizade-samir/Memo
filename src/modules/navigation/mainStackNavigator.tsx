import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MainHeader from 'components/mainHeader';
import MainNotesScreen from 'screens/mainNotesScreen';

interface MainStackNavigatorProps {}

const MainStack = createStackNavigator()

const MainStackNavigator: React.FC<MainStackNavigatorProps> = (props) => {
    return(
        <>
            <MainHeader />
            <MainStack.Navigator screenOptions={{headerShown: false}}>
                <MainStack.Screen name={'MainNotesScreen'} component={MainNotesScreen} />
            </MainStack.Navigator>
        </>
    );
};

export default MainStackNavigator;
