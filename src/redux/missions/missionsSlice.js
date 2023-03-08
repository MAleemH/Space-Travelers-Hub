/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  missionLists: [],
  isLoading: false,
  status: 'idle',
};

export const getMissionsData = createAsyncThunk(
  'missionList/getMissionsData',
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (e) {
      return e.message;
    }
  },
);

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getMissionsData.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(getMissionsData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        missionLists: action.payload,
      }))
      .addCase(getMissionsData.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
      }));
  },
});

export default missionsSlice.reducer;
