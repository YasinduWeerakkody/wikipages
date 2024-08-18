import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ArticleGroup {
  articleGroupId: number;
  groupName: string;
  description: string;
  icon: string;
  iconType: number;
  isPublic: number;
  isSharedInSocialMedia: number;
  isActive: string;
}

interface ArticleGroupState {
  articleGroups: ArticleGroup[];
}
const initialState: ArticleGroupState = {
  articleGroups: [],
};

const articleGroupSlice = createSlice({
  name: "articleGroup",
  initialState,
  reducers: {
    setArticleGroup: (state, action: PayloadAction<ArticleGroup>) => {
      state.articleGroups.push(action.payload);
    },
    resetArticleGroup: (state) => {
      state.articleGroups = [];
    },
  },
});

export const { setArticleGroup, resetArticleGroup } = articleGroupSlice.actions;
export default articleGroupSlice.reducer;
