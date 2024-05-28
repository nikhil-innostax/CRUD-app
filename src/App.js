import React from "react";
import { useState } from "react";
import FormFormik from "./Components/FormFormik";
import ShowUserData from "./Components/ShowUserData";

function App() {
  const [editUser, setEditUser] = useState(null);
  const [userDetails,setUserDetails]=useState({first:"",last:"",email:"",roll:""})
  return (
    <>
        <FormFormik editUser={editUser} setEditUser={setEditUser} userDetails={userDetails} setUserDetails={setUserDetails}/>
        <ShowUserData setEditUser={setEditUser} setUserDetails={setUserDetails}/>
    </>
  )
}

export default App;

