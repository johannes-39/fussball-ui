import { Image } from 'expo-image';
import { StyleSheet, Button } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import React, {useEffect, useState} from "react";
import PlayerCard from "@/components/player-card";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";
import {addFootballPlayer, fetchFootballData} from "@/api/footballSlice";
import {PlayerProps} from "@/api/types";
import AddPlayer from '@/components/add-player';
import DialogWindow from "@/components/dialog-window";


export default function TabThreeScreen() {
    const { players, loading, error } = useSelector((state: RootState) => state.football);
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchFootballData()); // ✅ fetch über Thunk
    }, [dispatch]);
    const handleAddPlayer = (player: PlayerProps) => {
        dispatch(addFootballPlayer(player));
        setModalVisible(false);
    };
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={{
                        uri: "https://www.fussballn.de/upload/images/Teaser8/775404.jpg",
                    }}
                    style={styles.reactLogo}
                />
            }>
            {
                players.map((player: PlayerProps, index) => (
                    <PlayerCard
                        key={index}
                        {...player}
                    />
                ))
            }
            <DialogWindow openComponent={<Button title="Neuen Spieler hinzufügen" onPress={() => setModalVisible(true)} />}
                          open={modalVisible}
                          onClose={() => setModalVisible(false)}>
                <AddPlayer  onSubmit={handleAddPlayer} />
            </DialogWindow>
        </ParallaxScrollView>

    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        color: 'white',
    },
});
