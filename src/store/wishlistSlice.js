import { createSlice } from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addItemsToWishList:(state,action) => {
            state.push(action.payload)
        },
        removeFromWishList: (state,action) => {
            return state.filter((itemId) => itemId !== action.payload)
        }
    }
})

export const wishlistActions = wishlistSlice.actions
export default wishlistSlice