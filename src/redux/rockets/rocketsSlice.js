import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// rockets API
const rocketsAPI = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rocketsLists: [],
  isLoading: false,
  status: 'idle',
};

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
      reserved: false,
    });
  });
  return allRockets;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket(state, action) {
      const newState = state.rocketsLists.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
      return { ...state, rocketsLists: newState };
    },
    cancelReserve(state, action) {
      const newState = state.rocketsLists.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
      return { ...state, rocketsLists: newState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsData.pending, (state) => ({
        ...state,
        isLoading: true,
        error: '',
      }))
      .addCase(fetchRocketsData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        rocketsLists: action.payload,
      }))
      .addCase(fetchRocketsData.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
      }));
  },
});

export const { reserveRocket, cancelReserve } = rocketsSlice.actions;
export default rocketsSlice.reducer;
