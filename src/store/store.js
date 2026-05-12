import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './searchFilterSlice'
import wishlistSlice from './wishlistSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        search : searchReducer,
        wishlist : wishlistSlice,
        cart: cartSlice,
    }
})

export default store