import { useState } from "react";

function App(){
  const [data,setData]=useState({
    first:"",
    last:"",
    email:"",
    roll:"",
  });
  const [edit,setEdit]=useState(false)
  const [editIndex,setEditIndex]=useState("")
  const [arr,setArr]=useState([])
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(edit){
      const table=arr;
      Object.assign(table[editIndex],data)
      setArr([...arr])
      setData({
        first:"",
        last:"",
        email:"",
        roll:"",
      })
    }
    else{
      setArr([...arr,data]);
      console.log(arr)
      setData({
        first:"",
        last:"",
        email:"",
        roll:""
      })
    }
  }
  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value,
    })
  }

  const deleteInd=(ind)=>{
    console.log(arr);
    const filter=arr.filter((e,i)=>i!==ind)
    setArr(filter)
    console.log(arr)
  }

  const editInd=(ind)=>{
    const temp=arr[ind];
    setData({
      first:temp.first,
      last:temp.last,
      email:temp.email,
      roll:temp.roll,
    })
    setEdit(true);
    setEditIndex(ind)
  }
  return (
    <>
      <h1 className="text-orange-600 text-center text-4xl p-4">Input Form</h1>
      <form onSubmit={handleSubmit} className="text-center w-[95%]">
        <label className="text-xl p-2 w-6/12">First Name:</label><br/>
        <input type="text" className="border border-black m-2" name="first" value={data.first} onChange={handleChange}/>
        <br/>
        <label className="w-6/12 text-xl p-2">Last Name:</label><br/>
        <input type="text" className="border border-black m-2" name="last" value={data.last} onChange={handleChange}/>
        <br/>
        <label  className="w-6/12 text-xl p-2 text-center">Email:</label><br/>
        <input  className="border border-black m-2" type="email" name="email" value={data.email} onChange={handleChange}/>
        <br/>
        <label  className="w-6/12 text-xl p-2 text-center">Roll No:</label><br/>
        <input  className="border border-black m-2" type="text" name="roll" value={data.roll} onChange={handleChange}/>
        <br/>
        <input className="border bg-gray-700 text-white text-2xl p-2 rounded-xl" type="submit"/>
      </form>
      <br/>
      <br/> 
      <table className="text-center w-[95%] p-2 m-auto border border-black border-collapse">
        <thead className="border border-black ">
          <tr className="p-2">
            <th className="p-2 border border-black w-2/12">First Name:</th>
            <th className="p-2 border border-black w-2/12">Last Name:</th>
            <th className="p-2 border border-black w-2/12">Email:</th>
            <th className="p-2 border border-black w-2/12">Roll No:</th>
            <th className="p-2 border border-black w-2/12">Edit:</th>
            <th className="p-2 border border-black w-2/12">Delete:</th>
            </tr>
        </thead>
        <tbody>
          {
            arr.map((item,ind)=>{
              return(
                <tr key={ind}>
                <td className="border border-black">{item.first}</td>
                <td className="border border-black">{item.last}</td>
                <td className="border border-black">{item.email}</td>
                <td className="border border-black">{item.roll}</td>
                <td className="border border-black">
                  <button className="border border-black text-white bg-blue-600 m-2 px-4 py-2 rounded-xl hover:bg-blue-800" onClick={()=>editInd(ind)}>EDIT</button>                 
                </td>
                <td className="border border-black">
                <button className="border border-black text-white bg-red-700 m-2 px-4 py-2 rounded-xl hover:bg-red-800" onClick={()=>deleteInd(ind)}>DELETE</button>
                </td>
              </tr>
              )   
            })
          }
        </tbody>
      </table>
      </>
  )
}
export default App;
