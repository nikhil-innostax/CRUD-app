import React,{useState} from "react";
import FormFormik from "./components/FormFormik";
import ShowUserData from "./components/ShowUserData";

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
