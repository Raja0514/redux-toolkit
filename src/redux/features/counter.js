import { createSlice } from "@reduxjs/toolkit"

const initialstate={

    count:0
}

let counterSlice=createSlice({
    name:'counter',
    initialState:initialstate,
    reducers:{

        increment:function(state,action){
            state.count=state.count+1
        },
        decrement:function(state,action){
            state.count=state.count-1
        },
        incrementby5:function(state,action){
         state.count=state.count+action.payload
        }
    }
});

export const{increment,decrement,incrementby5}=counterSlice.actions;

export default counterSlice.reducer;