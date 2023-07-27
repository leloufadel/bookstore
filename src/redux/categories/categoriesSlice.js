import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus() {
      return 'Under construction';
    },
  },
});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
