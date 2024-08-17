import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer from "../Reducer/ArticleSlice"; // Import the rootReducer correctly

const store = configureStore({
  reducer: {
    articles: ArticleReducer, // Use the rootReducer in the store
  }, // Use the rootReducer in the store
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Export the store
export default store;
