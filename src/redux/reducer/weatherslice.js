import {createSlice} from '@reduxjs/toolkit';
const initialState=[]
export const weatherSlice =createSlice({
    name:'weather',
    initialState,
    reducers:{
        addCity:(state,action)=>{
            state.push(action.payload)
        },
    }
}
)

export const {addCity}=weatherSlice.actions
export default weatherSlice.reducer;