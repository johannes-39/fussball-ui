import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { PlayerProps } from "@/app/(tabs)/team";
import {Match} from "@/app/(tabs)/games";

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
        marginLeft: 10,
        flexDirection: 'column',
    },
    nameText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
    },
    infoText: {
        fontSize: 10,
        color: 'lightgray',
        marginTop: 2,
    },
});

const GameCard = ({
                        homeTeamName,
    guestTeamName,
    kickoffDate,
    kickoffTime,
    result
                    }: Match) => (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.nameText}>{homeTeamName} : {guestTeamName}</Text>
                <Text style={styles.infoText}>
                    {result} - {kickoffDate} {kickoffTime}
                </Text>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
);

export default GameCard;
