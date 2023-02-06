import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
         state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
         let index = action.payload;
         state.items.splice(index,1);
        },
        clearCart:(state)=>{
         state.items = []
        }
    }
})

export const {addItem,removeItem,clearCart} = CartSlice.actions;
export default CartSlice.reducer;