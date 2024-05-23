import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, addComments } from "./App/DataAction";
import Fetch from "./components/Fetch";
function App() {
  // const dispatch = useDispatch();
  // const random=useSelector(state=>state.data.data)
  // useEffect(() => {
  //   console.log("Fetched comments");
  //    dispatch(fetchComments())
  // }, []);
  // console.log("random - ", random);
  // // const data = dispatch(fetchData);
  // // console.log("data", data);
  // // <div>{random}</div>

  // useEffect(()=>{
  //   console.log("Added comments");
  //   dispatch(addComments({id: 25, postId: 31, userId: 21, comment: 'Sed mollis sagii'}))

  // },[])
  return (
    <Fetch/>
  )
}

export default App;
