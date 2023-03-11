/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

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
      const response = await fetch(API_URL);
      const data = await response.json();
      const newData = [];
      data.forEach((list) => {
        newData.push({
          missionName: list.mission_name,
          missionId: list.mission_id,
          description: list.description,
          joinedMission: false,
        });
      });
      return newData;
    } catch (e) {
      return e.message;
    }
  },
);

const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newState = state.missionLists.map((mission) => {
        if (mission.missionId !== action.payload) {
          return mission;
        }
        return { ...mission, joinedMission: !mission.joinedMission };
      });
      return { ...state, missionLists: newState };
    },
  },

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

export const { joinMission } = missionsSlice.actions;
export default missionsSlice.reducer;
