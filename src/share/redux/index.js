import { configureStore } from "@reduxjs/toolkit";
import gameReducers from "./reducers/game.reducers";
import playerReducers from "./reducers/player.reducers";

export const store = configureStore({
    reducer: {
        game: gameReducers,
        player: playerReducers
    },
});
