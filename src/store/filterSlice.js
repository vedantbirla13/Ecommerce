import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterItems: (state, action) => {
      const { items, search } = action.payload;
      const tempItems = items.filter(
        (item) =>
          item.item_name.toLowerCase().includes(search.toLowerCase()) ||
          item.company.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredProducts = tempItems;
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
