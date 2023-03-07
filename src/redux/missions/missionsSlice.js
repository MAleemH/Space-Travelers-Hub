/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missionLists: [],
};

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
});

export default missionsSlice.reducers;
