import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk("commentData/fetchData", async () => {
  try {
    const response = await fetch("http://localhost:3000/",{method: 'GET'});
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json();
    if (data) {
      return data.user;
      // return data
    } else {
      throw new Error("Incomplete");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});



export const addComments = createAsyncThunk("commentData/addComment", async (query) => {
  try {
     const response=await fetch("http://localhost:3000/create",{method: 'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(query)});
     if(!response.ok){
        throw new Error('Failed to add')
     }
     const data=await response.json();
     if(data){
        return data.user;
        // return data 
     } else{
        throw new Error("Not added")
     }
    } catch(error){
        throw new Error(error.message)
    }
  } 
);

export const deleteComments = createAsyncThunk('commentData/deleteComment', async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/${id}`, {method: 'DELETE' });
            if (!response.ok) {
                throw new Error('Failed to delete');
            }
            const data = await response.json();
            if(data){
                console.log(id)
                return id;
            }
            else{
                throw new Error("Not deleted")
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

export const updateComments=createAsyncThunk("commentData/updateComment",async({id,text}) => {
    try{
        const response=await fetch(`http://localhost:3000/${id}`,{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({id,text})})
        if(!response.ok){
          throw new Error('Failed to update')
        }
        const data=await response.json();
        if(data){console.log("DATA", data);return {id,text}}
        else{
          throw new Error('Not updated')
        }
    }catch(error){
      throw new Error(error.message)
    }
  }

)

