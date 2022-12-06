import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import MoodEntry from '../types/MoodEntry';

export interface State {
  entries: MoodEntry[];
}

const initialState: State = {
  entries: [
    {
      id: 0,
      feeling: ['happy'],
      value: 5,
    },
  ],
};

export const entrySlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    addEntry: (state, { payload }: PayloadAction<MoodEntry>) => {
      state.entries.push(payload);
    },
  },
});

export const { addEntry } = entrySlice.actions;

export default entrySlice.reducer;
