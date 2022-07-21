import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: "game",
    initialState: {
        gameId: "",
        currentGame: {},
        questionList: [],
        playerAnswerCount: 0,
        rankList: {}
    },
    reducers: {
        saveGameId: (state, action) => {
            state.gameId = action.payload;
        },
        updateCurrentGame: (state, action) => {
            state.currentGame = action.payload;
        },
        updateQuestionList: (state, action) => {
          state.questionList = action.payload;
        },
        updatePlayerAnswerCount: (state, action) => {
          state.playerAnswerCount = action.payload;
        },
        updateRankList: (state, action) => {
          state.rankList = action.payload
        }
    },
});

export const { saveGameId, updateCurrentGame, updateQuestionList, updatePlayerAnswerCount, updateRankList } = gameSlice.actions;
export default gameSlice.reducer;
