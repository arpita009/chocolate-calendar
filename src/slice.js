import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
  },
});

const selectors = {};
const actions = { ...slice.actions };

export { actions, selectors };
export default slice;
