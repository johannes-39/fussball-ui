import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import {PlayerProps} from "@/api/types";
import {addCost, fetchCosts} from "@/api/footballSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";

const styles = StyleSheet.create({
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileImage: {
        width: 120,
        height: 160,
        borderRadius: 10,
        marginBottom: 10,
    },
    btn: {
        backgroundColor: "#333",
        padding: 12,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: "center"
    },
    payBtn: {
        backgroundColor: "#1e90ff",
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    }
});

const PlayerCardDialog = ({id = 0, imageUrl, firstName, lastName, position, number, birthDate, amount = 0} : PlayerProps) => {
    const { costs } = useSelector((state: RootState) => state.football);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchCosts(id));
    }, [dispatch, id]);
    console.log(costs);
    return (
        <View style={{ alignItems: 'center', padding: 20 }}>
            <Image
                style={styles.profileImage}
                source={{ uri: imageUrl }}
            />
                <Text style={styles.modalTitle}>{firstName} {lastName}</Text>
                <Text>{position} | #{number} | {birthDate}</Text>
                <Text style={{ color: amount >= 0 ? 'green' : 'red', fontWeight: 'bold' }}>{amount}€</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => dispatch(addCost({playerId: id, amount: -1.5, description: "Neues Bier"}))}
            >
                <Text style={styles.btnText}>Neues Bier</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.btn, styles.payBtn]}
                onPress={() => dispatch(addCost({playerId: id, amount: amount * -1, description: "Bezahlt"}))}
            >
                <Text style={styles.btnText}>Bezahlt</Text>
            </TouchableOpacity>
        </View>
    )
}
export default PlayerCardDialog
