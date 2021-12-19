import { createSlice } from '@reduxjs/toolkit'
import swal from 'sweetalert';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {

            if (state.quantity === 0) {
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
            }
            else if (state.quantity !== 0) {
                for (const pd of state.products) {

                    if (pd._id !== action.payload._id) {
                        state.quantity += 1;
                        state.products.push(action.payload);
                        state.total += action.payload.price * action.payload.quantity;
                        break;
                    }
                    else if (pd._id === action.payload_id) {
                        swal({
                            icon: "warning",
                        });
                        break;

                    }

                }

            }


        },
        deleteProduct: (state, action) => {
            console.log('payload', action.payload)
            state.products = state.products.filter(pd => pd._id !== action.payload._id)
            state.quantity -= 1
            state.total -= action.payload.price * action.payload.quantity
        }
    }
})

export const { addProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;