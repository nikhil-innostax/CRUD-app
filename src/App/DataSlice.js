import { createSlice } from "@reduxjs/toolkit";
import { fetchComments,addComments,deleteComments,updateComments} from "./DataAction";

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
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.status = "succeeded";
      console.log("Added")
      state.data = action.payload;
    })
    .addCase(addComments.fulfilled,(state,action)=>{
        state.status="success"
        console.log(action,state.data)
        state.data.push(action.payload)

    })
    .addCase(deleteComments.fulfilled, (state, action) => {
        state.status = "success";
        const filter=state.data.filter(item=>item._id!==action.payload)
        state.data=filter
        console.log(filter)
    })
    .addCase(updateComments.fulfilled, (state, action) => {
        state.status = "success";
        console.log("update id",action.payload,state.data)
        state.data = state.data.map(item =>{
          if(item._id===action.payload.id){
            return action.payload.text
          }
          else{
            return item
          }
        },
        );
        console.log("Updated",action)
    })
  },
});

// export {}= dataSlice

export default dataSlice.reducer;