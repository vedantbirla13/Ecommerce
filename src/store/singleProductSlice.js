import { createSlice } from "@reduxjs/toolkit";

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState: [],
    reducers: {
        getSingleProduct: (state, action) => {
            // console.log(action)
            return action.payload
        }
    }
})

export const singleProductActions = singleProductSlice.actions
export default singleProductSlice