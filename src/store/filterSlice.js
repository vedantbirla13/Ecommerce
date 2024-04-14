import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:[],
  filteredProducts: [],
  price: "",
  category: [],
  brand: []
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getAllProducts: (state,action) => {
      state.products = action.payload
    },

    filterItems: (state, action) => {
      const { items, search } = action.payload;
      const tempItems = items.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      );
      state.filteredProducts = tempItems;
    },
    
    filterPrice: (state, action) => {
      if (action.payload === "highToLow") {
        state.filteredProducts.sort((a, b) => b.price - a.price);
      } else if (action.payload === "lowToHigh") {
        state.filteredProducts.sort((a, b) => a.price - b.price);
      } 
    },

    catgeoryFilter: (state,action) => {
      state.category = action.payload
      if (action.payload.length === 0 ) {
        // If no categories selected, show all products
        state.filteredProducts = state.products.items;
      } else {
        state.filteredProducts = state.products.items.filter((product) =>
            state.category.includes(product.category)
          );
      }
    },

    brandFilter: (state,action) => {
      state.brand = action.payload
      console.log(state.brand)
      if (action.payload.length === 0 ) {
        // If no categories selected, show all products
        state.filteredProducts = state.products.items;
      } else {
        state.filteredProducts = state.products.items.filter((product) =>
            state.brand.includes(product.brand)
          );
      }
    },

    resetFilters: (state) => {
      // Reset all filter-related states to their initial values
      state.filteredProducts = state.products.items
      state.brand = [];
      state.price = "";
      state.category = [];
    },
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice;
