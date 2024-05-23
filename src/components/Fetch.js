import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, addComments } from "../App/DataAction";

const Fetch=()=>{
     const dispatch = useDispatch();
    const random=useSelector(state=>state.data.data)
    const [obj,setObj]=useState({id:"",postId:"",userId:"",comment:""});
    useEffect(() => {
      console.log("Fetched comments");
       dispatch(fetchComments())
    }, []);
    console.log("random - ", random);
    //  const addData=()=>{
    //     console.log("Added comments");
    //     dispatch(addComments({id: 25, postId: 31, userId: 21, comment: 'Sed mollis sagii'}))
    //  }
      const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addComments(obj))
        setObj({id:"",post:"",user:"",comment:""}) 
      }
    // const data = dispatch(fetchData);
    // console.log("data", data);
    // <div>{random}</div>
    return(
      <>
        <h1 className="text-orange-600 text-3xl text-center m-4 p-4">Form:</h1>
        <form onSubmit={handleSubmit}className="text-center p-4 m-4">
            <label className="p-4 m-4 text-xl">Id:</label><br/>
            <input type="text" className="p-2 border border-black text-black" value={obj.id} onChange={(e)=>setObj({...obj,id:e.target.value})}/>
            <br/>
            <label className="p-4 m-4 text-xl">Post Id:</label><br/>
            <input className="p-2 border border-black" type="text" value={obj.post} onChange={(e)=>setObj({...obj,postId:e.target.value})} />
            <br/>
            <label className="p-4 m-4 text-xl"> User Id:</label><br/>
            <input type="text" className="p-2 border border-black" value={obj.user} onChange={(e)=>setObj({...obj,userId:e.target.value})}/>
            <br/>
            <label className="p-4 m-4 text-xl">Comment</label><br/>
            <input type="text" className="p-2 border border-black" value={obj.comment} onChange={(e)=>setObj({...obj,comment:e.target.value})}/>
            <br/>
            <button type="submit" className="p-4 m-4 bg-gray-700 text-white">Submit</button>
        </form>
        <table className="w-10/12 text-center m-auto border border-black border-collapse">
            <thead className="border border-black">
                <th className="border border-black">Id</th>
                <th className="border border-black">Post Id</th>
                <th className="border border-black">User id</th>
                <th className="border border-black">Comment</th>
                <th className="border border-black">Action</th>
            </thead>
            <tbody>
                {
                   random &&  random.map((e)=>(
                        <tr id={e.id}>
                            <td className="border border-black">{e?.id}</td>
                            <td className="border border-black">{e?.postId}</td>
                            <td className="border border-black">{e.userId}</td>
                            <td className="border border-black">{e?.comment.substring(0,20)}</td>
                            <td>
                                <button className="text-white bg-blue-600 m-2 p-2">Edit</button>
                                <button className="text-white bg-red-600 m-2 p-2">Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </>
    )

}

export default Fetch;