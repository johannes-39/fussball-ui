import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, Alert, Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import {useEffect, useState} from "react";
import PlayerCard from "@/components/player-card";
import {bfvApi} from "bfv-api";
import {Match} from "@/app/(tabs)/games";
import {postBier} from "@/app/(tabs)/explore";

export type PlayerProps = {
    id?: number;           // optional, da beim Erstellen noch nicht vorhanden
    firstName: string;
    lastName: string;
    position: string;
    birthDate: string;     // ISO-Date String, z.B. "1990-05-01"
    club: string;
    number: number;
    amount?: number;
}

export default function TabThreeScreen() {
    const [count, setCount] = useState(0);
    const [players, setPlayers] = useState<PlayerProps[]>([]);

    useEffect(() => {
        fetch('http://192.168.2.182:8080/players') // URL deiner API
            .then(response => response.json())
            .then(data => setPlayers(data))
            .catch(error => console.error('Error:', error));
    }, []);
    console.log(players);
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
                players.map((player, index) => (
                    <PlayerCard
                        key={index}
                        {...player}
                    />
                ))
            }
            <Button
                title="Neues Bier"
                onPress={() => postBier()}
            />
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
