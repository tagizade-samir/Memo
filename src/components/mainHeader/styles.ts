import { StyleSheet } from "react-native";

export const getStyles = () => {
    return StyleSheet.create({
        outerContainer: {
            height: 60,
            width: '100%',
            justifyContent: 'center',
            paddingHorizontal: 10,
            backgroundColor: 'transparent',
        },
        innerContainer: {
            backgroundColor: 'white',
            height: 50,
            borderRadius: 10,
            flexDirection: 'row',
            borderWidth: 1,
        },
        leftContainer: {
            flex: 0.15,
            justifyContent: 'center',
            alignItems: 'center',
        },
        centralContainer: {
            flex: 0.7,
        },
        rightContainer: {
            flex: 0.15,
        },
    });
};