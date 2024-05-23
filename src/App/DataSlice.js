import { createSlice } from "@reduxjs/toolkit";
import { fetchComments,addComments,deleteComments} from "./DataAction";

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
    .addCase(deleteComments.fulfilled,(state,action)=>{
      state.status="success";
      const filteredData=state.data.filter(item=>item._id!==action.payload)
      state.data=filteredData
      console.log(filteredData)
    })
  },
});

// export {}= dataSlice

export default dataSlice.reducer;