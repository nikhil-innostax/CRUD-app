import { createSlice } from "@reduxjs/toolkit";
import { fetchUser,addUser,deleteUser,updateUser} from "./dataAction";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    })
    .addCase(addUser.fulfilled,(state,action)=>{
        state.status="success";
        state.data.push(action.payload)

    })
    .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "success";
        const filter=state.data.filter(item=>item._id!==action.payload)
        state.data=filter
    })
    .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "success";
        state.data = state.data.map(item =>{
          if(item._id===action.payload.id){
            return action.payload.text
          }
          else{
            return item
          }
        },
        );
    })
  },
});

// export {}= dataSlice

export default dataSlice.reducer;