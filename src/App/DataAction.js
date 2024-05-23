import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk("commentData/fetchData", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.org/comments",{method: 'GET'});
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json();
    if (data) {
      return data;
    } else {
      throw new Error("Incomplete");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});



export const addComments = createAsyncThunk("commentData/addComment", async (query) => {
  try {
     const response=await fetch("https://jsonplaceholder.org/comments",{method: 'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(query)});
     if(!response.ok){
        throw new Error('Failed to add')
     }
     const data=await response.json();
     if(data){
        return data;
     } else{
        throw new Error("Not added")
     }
    } catch(error){
        throw new Error(error.message)
    }
  } 
);

export const deleteComments=createAsyncThunk('commentData/deleteComment', async(id)=>{
    try{
        await fetch(`https://jsonplaceholder.org/comments'/${id}`,{method:'DELETE'})
        return id
    }
    catch(error){
        throw new Error(error.message)
    }
})
