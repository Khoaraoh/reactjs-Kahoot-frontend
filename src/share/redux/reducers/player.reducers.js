import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
    name: "player",
    initialState: {
        player: {}
    },
    reducers: {
        savePlayer: (state, action) => {
            state.player = action.payload;
        },
    },
});

export const { savePlayer } = playerSlice.actions;
export default playerSlice.reducer;
