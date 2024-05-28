import { useSelector,useDispatch } from "react-redux"
import {deleteUser} from "../App/dataAction";
import Barcode from "./Barcode";

const ShowUserData=({setEditUser,setUserDetails})=>{
    const dispatch=useDispatch();
    const userData= useSelector(state => state.data.data);
    const handleDelete = (ind) => {
        dispatch(deleteUser(userData[ind]._id));
    };
    function handleEdit(ind){
        const item=userData[ind];
        setEditUser(item._id);
        setUserDetails(item);        
    }
    return (
        <table className="w-10/12 text-center m-auto border border-black border-collapse">
                <thead className="border border-black">
                    <tr>
                        <th className="border border-black">First Name:</th>
                        <th className="border border-black">Last Name:</th>
                        <th className="border border-black">Email:</th>
                        <th className="border border-black">Roll No.</th>
                        <th className="border border-black">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData && userData.map((e,ind) => (
                        <tr key={e._id}>
                            <td className="border border-black">{e?.first}</td>
                            <td className="border border-black">{e?.last}</td>
                            <td className="border border-black">{e.email}</td>
                            <td className="border border-black">{e?.roll}</td>
                            <td className="border border-black">
                                <div className="flex justify-evenly">       
                                    <Barcode text={JSON.stringify(e)} blockWidth={2} blockHeight={1} />         
                                    <div className="my-auto"><button onClick={()=>handleEdit(ind)} className="text-white bg-blue-600 m-2 p-2 rounded-xl">Edit</button></div>
                                    <div className="my-auto"><button onClick={() => handleDelete(ind)} className="text-white bg-red-600 m-2 p-2 rounded-xl">Delete</button></div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    )
}

export default ShowUserData;