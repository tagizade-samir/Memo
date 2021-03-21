import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import MenuIcon from 'assets/icons/menuIcon';
import { getStyles } from './styles';
import { useStore } from '../../modules/mobx';

interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = (props) => {
    const styles = useMemo(() => getStyles(), []);
    const { LocalizationStore: { t } } = useStore();

    return(
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={styles.leftContainer}>
                    <MenuIcon color={'#000'} />
                </View>
                <View style={styles.centralContainer}>
                    <Text>{t('mainSearch')}</Text>
                </View>
                <View style={styles.rightContainer}></View>
            </View>
        </View>
    );
};

export default MainHeader;
