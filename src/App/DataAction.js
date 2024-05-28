import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("commentData/fetchData", async () => {
  try {
    const response = await fetch("http://localhost:3000/users",{method: 'GET'});
    if (!response.ok) {
      throw new Error("Failed to fetch User");
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

export const addUser = createAsyncThunk("commentData/addData", async (query) => {
  try {
     const response=await fetch("http://localhost:3000/users/create",{method: 'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(query)});
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

export const deleteUser = createAsyncThunk('commentData/deleteData', async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/users/delete/${id}`, {method: 'DELETE' });
            if (!response.ok) {
                throw new Error('Failed to delete');
            }
            const data = await response.json();
            if(data){
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

export const updateUser=createAsyncThunk("commentData/updateData",async({id,text}) => {
    try{
        const response=await fetch(`http://localhost:3000/users/update/${id}`,{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({id,text})})
        if(!response.ok){
          throw new Error('Failed to update')
        }
        const data=await response.json();
        if(data){return {id,text}}
        else{
          throw new Error('Not updated')
        }
    }catch(error){
      throw new Error(error.message)
    }
  }

)

