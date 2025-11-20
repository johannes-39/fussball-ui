import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {addCostThunk, addPlayerThunk, getCostsThunk, getFootballDataThunk} from "@/api/footballThunk";
import {CostProps, PlayerProps, SettingProps} from "@/api/types";
import { Settings } from './settings';

export interface FootballState {
    value: number;
    players: PlayerProps[];
    costs: CostProps[];
    loading: boolean;
    error: string | null;
    settings: SettingProps[];
}

const initialState: FootballState = {
    value: 0,
    players: [],
    costs: [],
    loading: false,
    error: null,
    settings: Settings,
}

export const fetchFootballData = createAsyncThunk<PlayerProps[]>(
    'football/fetchFootballData',
    getFootballDataThunk,
);

export const addFootballPlayer = createAsyncThunk<void, PlayerProps>(
    'football/addFootballPlayer',
    addPlayerThunk,
);

export const addCost = createAsyncThunk<CostProps, any>(
    'football/addCost',
    addCostThunk,
);

export const fetchCosts = createAsyncThunk<CostProps[], number >(
    'football/fetchCosts',
    getCostsThunk,
)
export const footballSlice = createSlice({
    name: 'football',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        updateSetting: (state, action: PayloadAction<{ id?: number; selectedValue: string | boolean }>) => {
            const { id, selectedValue } = action.payload;
            const setting = state.settings.find(s => s.id === id);
            if (setting) {
                setting.selectedValue = selectedValue;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFootballData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFootballData.fulfilled, (state, action) => {
                state.loading = false;
                state.players = [...action.payload].sort((a, b) =>
                    a.lastName.localeCompare(b.lastName)
                );
            })
            .addCase(fetchFootballData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Unknown error';
            })
            .addCase(addFootballPlayer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addFootballPlayer.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addFootballPlayer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Unknown error';
            })
            .addCase(addCost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addCost.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addCost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Unknown error';
            })
            .addCase(fetchCosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCosts.fulfilled, (state, action   ) => {
                state.loading = false;
                state.costs = action.payload;
            })
            .addCase(fetchCosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Unknown error';
            });
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateSetting } = footballSlice.actions

export default footballSlice.reducer