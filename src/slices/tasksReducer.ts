import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index.ts";

interface tasksState {
  tasks: string[];
}

const initialState: tasksState = {
	tasks: [],
};

export const tasksSlice = createSlice({
	name: 'tasksList',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<string>) => {
			state.tasks = [...state.tasks, action.payload]
		},
	},
})

export const { addTask } = tasksSlice.actions
export const selectTask = (state: RootState) => state.tasksList.tasks

export default tasksSlice.reducer