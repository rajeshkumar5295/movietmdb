import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   url:{},
   genres:{},
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
          
    getApiConfiguration:(state,action)=>{
        //   console.log("checking action.payload",action.payload)
        state.url=action.payload;
    },
    getGenres:(state,action)=>{
        state.genres=action.payload;
    },

  

   
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration,   getGenres,getPost} = homeSlice.actions

export default homeSlice.reducer