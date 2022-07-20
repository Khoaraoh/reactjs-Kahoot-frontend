import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: "game",
    initialState: {
        gameId: "",
        currentGame: {},
    },
    reducers: {
        saveGameId: (state, action) => {
            state.gameId = action.payload;
        },
        updateCurrentGame: (state, action) => {
            state.currentGame = action.payload;
        },
    },
});

export const { saveGameId, updateCurrentGame } = gameSlice.actions;
export default gameSlice.reducer;
