import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer from "../Reducer/ArticleSlice"; // Import the rootReducer correctly
import ArticleGroupReducer from "../Reducer/ArticleGroupSlice";
const store = configureStore({
  reducer: {
    articles: ArticleReducer,
    articleGroups: ArticleGroupReducer,
  }, // Use the rootReducer in the store
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Export the store
export default store;
