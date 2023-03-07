import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allRockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
});

export default rocketsSlice.reducer;
