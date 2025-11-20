import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {PlayerProps} from "@/api/types";
import DialogWindow from "@/components/dialog-window";
import PlayerCardDialog from "@/components/player-card-dialog";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {addCost} from "@/api/footballSlice";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 8,
        backgroundColor: '#222831',
        borderRadius: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    tinyLogo: {
        width: 35,
        height: 50,
        borderRadius: 5,
    },
    card: {
        flexDirection: 'row',
        width: '100%',
    },
    innerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    leftContainer: {
        flexDirection: 'column',
        marginLeft: 10,
        flexShrink: 1, // Text wird nicht abgeschnitten
    },
    rightContainer: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginLeft: 10,
        marginRight: 10,
    },
    nameText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    infoText: {
        fontSize: 14,
        color: '#d6d6d6',
        marginTop: 2,
    },
    amountText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const PlayerCard = ({
    id,
                        firstName = "none",
                        lastName = "none",
                        birthDate = "0",
                        number = 0,
    club = "unbekannt",
                        position = "nicht zugeordnet",
    amount = 0,
    imageUrl,
                    }: PlayerProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const getAge = (birthDateString: string) => {
        const today = new Date();
        const birthDate = new Date(birthDateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--; // Noch nicht Geburtstag in diesem Jahr
        }
        return age;
    };

    const [open, setOpen] = React.useState(false);
    const playerButtonComponent = (
        <TouchableOpacity onPress={() => setOpen(true)} activeOpacity={0.7}>
            <View style={styles.card}>
                <Image
                    style={styles.tinyLogo}
                    source={{ uri: imageUrl }}
                />
                <View style={styles.innerCard}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.nameText}>{firstName.toUpperCase()} {lastName.toUpperCase()}</Text>
                        <Text style={styles.infoText}>{position} | #{number} | {getAge(birthDate)}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={[styles.amountText, { color: amount > 0 ? 'green' : 'red' }]}>
                            {amount}€
                        </Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>)
return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <DialogWindow open={open} openComponent={playerButtonComponent} onClose={() => setOpen(false)}>
                <PlayerCardDialog id={id} imageUrl={imageUrl} firstName={firstName} lastName={lastName} position={position} birthDate={birthDate} club={club} number={number} amount={amount}/>
            </DialogWindow>
        </SafeAreaView>
    </SafeAreaProvider>
);
}

export default PlayerCard;
