import {createSlice} from "@reduxjs/toolkit"

const cardSlice = createSlice({
    name:'card',
    initialState:{
        items:[],
        searchItems:[]
    },
    reducers:{
        addItem:(state,actions)=>{
            console.log(actions.payload)
            state.items.push(actions.payload);
            state.searchItems.push(actions.payload);
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