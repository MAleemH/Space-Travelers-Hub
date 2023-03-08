import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// rockets API
const rocketsAPI = 'https://api.spacexdata.com/v3/rockets';

// fetching data from API

export const fetchRocketsData = createAsyncThunk('fetchRocketsData', async () => {
  const response = await fetch(rocketsAPI);
  const data = await response.json();
  const allRockets = [];
  data.forEach((item) => {
    allRockets.push({
      id: item.id,
      rocket_name: item.rocket_name,
      description: item.description,
      flickr_images: item.flickr_images[0],
    });
  });
  return allRockets;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsData.fulfilled, (state, action) => action.payload);
  },
});

export default rocketsSlice.reducer;
