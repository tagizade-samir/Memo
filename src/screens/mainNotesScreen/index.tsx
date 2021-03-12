import * as React from 'react';
import { observer } from 'mobx-react';
import { Pressable, Text } from 'react-native';
import { useStore } from '../../modules/mobx';

interface MainNotesScreenProps {}

const MainNotesScreen: React.FC<MainNotesScreenProps> = observer((props) => {
    const { counterStore: { increment, decrement, count, doubleCount } } = useStore();
    console.log('count :>> ', count);

    return (
        <>
            <Text>Double count: {doubleCount}</Text>
            <Text>Count: {count}</Text>
            <Pressable
                onPress={() => {
                    increment();
                    console.log('incremented');
                }}
            >
                <Text>Increment</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    decrement();
                    console.log('decremented');
                }}
            >
                <Text>Decrement</Text>
            </Pressable>
        </>
    );
});

export default MainNotesScreen;
