import { createSlice } from '@reduxjs/toolkit'
import swal from 'sweetalert';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {

            const restCart = [...state.cart, action.payload];
            console.log(restCart)
            const arrayUniqueByKey = [

                ...new Map(restCart.map((item) => [item["_id"], item])).values(),
            ];

            state.cart = arrayUniqueByKey



        },
        deleteProduct: (state, action) => {
            console.log('payload', action.payload)
            state.cart = state.cart.filter(pd => pd._id !== action.payload._id)
        },
        // updateQuantity:(state,{payload})=>{
        //     if (payload === "dec") {
        //         state.quantity > 1 && setQuantity(quantity - 1)
        //     }
        //     else {
        //         setQuantity(quantity + 1)
        //     }
        // }

    }
})

export const { addProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;