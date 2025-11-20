import React, {useState} from 'react'
import {
    View,
    Button,
    Modal,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#8a8a8a',
        borderRadius: 12,
        padding: 20,
        maxHeight: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 10,
        padding: 5,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    label: {
        marginTop: 10,
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

type DialogWindowProps = {
    open?: boolean;
    onClose?: () => void;
    openComponent?: React.ReactNode;
    children: React.ReactNode;
}
const DialogWindow = ({...props} : DialogWindowProps) => {
    return (
        <View>
            {props.openComponent}
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.open}
                onRequestClose={props.onClose}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                        {props.children}
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default DialogWindow
