import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MainNotesScreen from '../../screens/mainNotesScreen';

interface MainStackNavigatorProps {}

const MainStack = createStackNavigator()

const MainStackNavigator: React.FC<MainStackNavigatorProps> = (props) => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen name={'MainNotesScreen'} component={MainNotesScreen} />
        </MainStack.Navigator>
    );
};

export default MainStackNavigator;
