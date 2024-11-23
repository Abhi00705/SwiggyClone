import {createSlice} from "@reduxjs/toolkit"

const cardSlice = createSlice({
    name:'card',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,actions)=>{
            state.items.push(actions.payload);
        },
        removeItem:()=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items = [];
        },
    },

});

export const {addItem,removeItem,clearCart} = cardSlice.actions;
export default cardSlice.reducer;