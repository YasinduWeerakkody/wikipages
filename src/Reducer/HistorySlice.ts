import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface History {
  no: number;
  articleGroupId: number;
  articleId: number | null;
  name: string;
  description: string;
  icon: string;
  iconType: number;
  isActive: string;
  isPublic: number;
  isSharedInSocialMedia: number;
  createdDate: string;
}

interface HistoryState {
  histories: History[];
}

const initialState: HistoryState = {
  histories: [],
};

const historyClice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<History>) => {
      state.histories.push(action.payload);
    },
    resetHistory: (state) => {
      state.histories = [];
    },
  },
});

export const { setHistory, resetHistory } = historyClice.actions;

export default historyClice.reducer;
