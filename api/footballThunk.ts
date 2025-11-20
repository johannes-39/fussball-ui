import {CostProps, PlayerProps} from "@/api/types";
import {fetchFootballData} from "@/api/footballSlice";
import { AsyncThunkAction, AsyncThunkConfig } from "@reduxjs/toolkit";

export const getFootballDataThunk = async () => {
    // Simulierter API-Aufruf
    const response = await fetch('http://localhost:8080/players');
    if (!response.ok) {
        throw new Error('Failed to fetch players');
    }
    const data: PlayerProps[] = await response.json();
    return data;
}


export const addPlayerThunk = async (player: PlayerProps, thunkAPI: { dispatch: (arg0: AsyncThunkAction<PlayerProps[], void, AsyncThunkConfig>) => void; rejectWithValue: (arg0: string) => any; }) => {
    try {
        await fetch('http://localhost:8080/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
        });
        thunkAPI.dispatch(fetchFootballData());
    } catch (error) {
        return thunkAPI.rejectWithValue('Failed to add player');
    }
}

export const addCostThunk = async (requestParams: CostProps, thunkAPI: { dispatch: (arg0: AsyncThunkAction<PlayerProps[], void, AsyncThunkConfig>) => void; rejectWithValue: (arg0: string) => any; }) => {
    try {
        await fetch(`http://localhost:8080/cost/${requestParams.playerId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestParams),
        });
        thunkAPI.dispatch(fetchFootballData());
    } catch (error) {
        return thunkAPI.rejectWithValue('Failed to add cost');
    }
}

export const getCostsThunk = async (playerId: number, thunkAPI: { dispatch: (arg0: AsyncThunkAction<PlayerProps[], void, AsyncThunkConfig>) => void; rejectWithValue: (arg0: string) => any; }) => {
    try {
        const response = await fetch(`http://localhost:8080/cost/${playerId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch costs');
        }
        const data: CostProps[] = await response.json();
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Failed to fetch costs');
    }
}