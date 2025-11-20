import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import {Ionicons} from "@expo/vector-icons";

type HeaderProps = {
    appName: string;
};

const Header = ({ appName }: HeaderProps) => {
    const router = useRouter();
    const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

    const handlePress = () => {
        const nextRoute = isSettingsOpen ? '/' : '/settings';
        setIsSettingsOpen(!isSettingsOpen);
        router.push(nextRoute);
    };

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{appName}</Text>
            <TouchableOpacity onPress={handlePress}>
                <Ionicons name={isSettingsOpen ? 'close' : 'settings-outline'} size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingHorizontal: 16,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        color: 'white',
        fontSize: 24,
    },
});
