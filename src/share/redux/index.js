import { configureStore } from "@reduxjs/toolkit";
import gameReducers from "./reducers/game.reducers";

export const store = configureStore({
    reducer: {
        game: gameReducers,
    },
});
