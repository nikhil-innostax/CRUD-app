import { createSlice } from "@reduxjs/toolkit";
import { fetchComments,addComments,deleteComments,updateComments} from "./DataAction";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    })
    .addCase(addComments.fulfilled,(state,action)=>{
        state.status="success"
        console.log(action)
        state.data?.push(action.payload)

    })
    .addCase(deleteComments.fulfilled, (state, action) => {
        state.status = "success";
        console.log("delete",action.payload);
        state.data = state.data.filter(item => item.id !== action.payload);
        console.log(state.data.id)
    })
    .addCase(updateComments.fulfilled, (state, action) => {
        state.status = "success";

        console.log("id",action.payload.id)
        state.data = state.data.map(item =>{
          (console.log(action.payload,"Hello",item))
          if(item.id===action.payload.text.id){
            return action.payload.text
          }
          else{
            return item
          }
        }
        );
        console.log("Updated",action)
    })
  },
});

// export {}= dataSlice

export default dataSlice.reducer;