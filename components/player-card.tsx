import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { PlayerProps } from "@/app/(tabs)/team";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#222831',
        borderRadius: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    tinyLogo: {
        width: 50,
        height: 70,
        borderRadius: 5,
    },
    textContainer: {
        width: '80%',
        marginLeft: 10,
        flexDirection: 'column',
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    infoText: {
        fontSize: 14,
        color: 'lightgray',
        marginTop: 2,
    },
    mainTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

const PlayerCard = ({
                        firstName = "none",
                        lastName = "none",
                        birthDate = "0",
                        number = 0,
                        position = "nicht zugeordnet",
    amount = 0
                    }: PlayerProps) => (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{ uri: "https://www.fussballn.de/Images/Design/person_blank_120x160.gif" }}
            />
            <View style={styles.mainTextContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{firstName} {lastName}</Text>
                    <Text style={styles.infoText}>
                        {position} | #{number} | {birthDate}
                    </Text>
                </View>
                <Text style={{ color: amount > 0 ? 'green' : 'red', fontWeight: 'bold' }}>
                    {amount}€
                </Text>
            </View>

        </SafeAreaView>
    </SafeAreaProvider>
);

export default PlayerCard;
