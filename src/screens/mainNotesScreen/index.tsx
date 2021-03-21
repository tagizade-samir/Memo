import * as React from 'react';
import { observer } from 'mobx-react';
import { Text, View } from 'react-native';

interface MainNotesScreenProps {}

const MainNotesScreen: React.FC<MainNotesScreenProps> = observer((props) => {
    return (
        <View>
            <Text>Main Screen</Text>
        </View>
    );
});

export default MainNotesScreen;
