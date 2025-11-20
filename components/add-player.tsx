import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';
import {PlayerProps} from "@/api/types";

type AddPlayerProps = {
    onSubmit: (player: PlayerProps) => void;
};

export default function AddPlayer({ onSubmit }: AddPlayerProps) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [club, setClub] = useState('');
    const [number, setNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = () => {
        // Validierung (einfach)
        if (!firstName || !lastName || !position || !birthDate || !club || !number) {
            Alert.alert('Fehler', 'Bitte alle Pflichtfelder ausfüllen.');
            return;
        }

        const player: PlayerProps = {
            firstName,
            lastName,
            position,
            birthDate,
            club,
            imageUrl,
            number: Number(number),
            amount: amount ? Number(amount) : undefined,
        };

        onSubmit(player);

        // Felder zurücksetzen
        setFirstName('');
        setLastName('');
        setPosition('');
        setBirthDate('');
        setClub('');
        setNumber('');
        setAmount('');
        setImageUrl('');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Vorname</Text>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Vorname"
            />

            <Text style={styles.label}>Nachname</Text>
            <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Nachname"
            />

            <Text style={styles.label}>Position</Text>
            <TextInput
                style={styles.input}
                value={position}
                onChangeText={setPosition}
                placeholder="Position"
            />

            <Text style={styles.label}>Geburtsdatum (YYYY-MM-DD)</Text>
            <TextInput
                style={styles.input}
                value={birthDate}
                onChangeText={setBirthDate}
                placeholder="1990-05-01"
            />

            <Text style={styles.label}>Verein</Text>
            <TextInput
                style={styles.input}
                value={club}
                onChangeText={setClub}
                placeholder="Verein"
            />

            <Text style={styles.label}>Trikotnummer</Text>
            <TextInput
                style={styles.input}
                value={number}
                onChangeText={setNumber}
                placeholder="Nummer"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Amount (optional)</Text>
            <TextInput
                style={styles.input}
                value={amount}
                onChangeText={setAmount}
                placeholder="Amount"
                keyboardType="numeric"
            />
            <Text style={styles.label}>Bild</Text>
            <TextInput
                style={styles.input}
                value={imageUrl}
                onChangeText={setImageUrl}
                placeholder="https://example.com/image.jpg"
            />

            <Button title="Spieler hinzufügen" onPress={handleSubmit} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 50,
    },
    label: {
        marginTop: 12,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
    },
});
