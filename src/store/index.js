import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemSlice"
import fetchStatusSlice from "./fetchStatusSlice"
import bagSlice from "./bagSlice"
import filterSlice from "./filterSlice"
import wishlistSlice from "./wishlistSlice"
import singleProductSlice from "./singleProductSlice"

const myntraStore = configureStore({
    reducer: {
        items:itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,
        filter: filterSlice.reducer,
        wishlist: wishlistSlice.reducer,
        singleProduct: singleProductSlice.reducer
    }
})

export default myntraStore