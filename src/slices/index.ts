import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksReducer";

export const store = configureStore({
  reducer: {
    tasksList: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
