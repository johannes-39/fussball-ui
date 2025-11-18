import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, Alert, Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import {useEffect, useState} from "react";
import PlayerCard from "@/components/player-card";
import { bfvApi } from "bfv-api";
import GameCard from "@/components/game-card";

export type PlayerProps = {
    firstname?: string;
    lastname?: string;
    age?: number;
    number?: number;
    position?: string;
    url?: string;
}
const players: PlayerProps[] = [{
    firstname: "Lionel",
    lastname: "Messi",
    age: 36,
    number: 10,
    position: "Forward",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg"
}, {
    firstname: "Cristiano",
    lastname: "Ronaldo",
    age: 39,
    number: 7,
    position: "Forward",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
}, {
    firstname: "Johannes",
    lastname: "Städtler",
    age: 25,
    number: 8,
    position: "Innenverteidiger",
    url: "https://www.fussballn.de/upload/images/Portrait4/655630.jpg"
}, {
    firstname: "Ciro",
    lastname: "Volpe",
    age: 22,
    number: 20,
    position: "Sturm",
}]

export type Match = {
    matchId: string;
    compoundId: string;
    competitionName: string;
    competitionType: string;
    teamType: string;
    kickoffDate?: string | null;         // nullable
    kickoffTime?: string | null;         // nullable
    homeTeamName: string;
    homeTeamPermanentId: string;
    homeClubId?: string | null;          // nullable
    homeLogoPrivate: boolean;
    guestTeamName: string;
    guestTeamPermanentId: string;
    guestClubId?: string | null;         // nullable
    guestLogoPrivate: boolean;
    result: string;
    tickerMatchId?: string | null;       // nullable
    prePublished: boolean;
};

const fetchMatches = async () => {
    const teamPermanentId = "016PH6MDKO000000VV0AG811VUDIC8D7";
    const {data} = await bfvApi.listMatches({params: {teamPermanentId}});
    return data as { matches: Match[] };
}
export default function TabFourScreen() {
    const [matches, setMatches] = useState<Match[]>([]);
    useEffect(() => {
        const loadMatches = async () => {
            const data = await fetchMatches();
            setMatches(data.matches);
            console.log(data.matches);
        };
        loadMatches();
    }, []);
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
            {matches.map((match, index) => (
                <GameCard
                    key={index}
                    {...match}
                />
            ))}
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
