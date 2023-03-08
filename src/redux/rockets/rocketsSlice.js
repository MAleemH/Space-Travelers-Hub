import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// rockets API
const rocketsAPI = 'https://api.spacexdata.com/v4/rockets';

// fetching data from API

export const fetchRocketsData = createAsyncThunk('fetchRocketsData', async () => {
  const response = await fetch(rocketsAPI);
  const data = await response.json();
  const allRockets = [];
  Object.keys(data).forEach((id) => {
    allRockets.push({
      id: id,
      rocket_name: data[id][0].rocket_name,
      description: data[id][0].description,
      flickr_images: data[id][0].flickr_images,
    });
  });
  return allRockets;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  extraReducers: builder => {
    builder
    .addCase(fetchRocketsData.fulfilled, (state, action) => ({
      ...state,
      rocket: [...action.payload],
    }))
  }
});

export default rocketsSlice.reducer;
