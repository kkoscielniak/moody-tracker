import { configureStore } from '@reduxjs/toolkit';
import moodReducer from './reducer';

export const store = configureStore({
  reducer: {
    mood: moodReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
