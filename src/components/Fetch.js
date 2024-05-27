import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, addComments, deleteComments, updateComments } from "../App/DataAction";
import { Formik,Form,Field } from "formik";
import { userSchema } from "../Schema";


const Fetch = () => {
    const [editIndex, setEditIndex] = useState(null);
    const [obj,setObj]=useState({first:"",last:"",email:"",roll:""})
    const dispatch = useDispatch();
    const random = useSelector(state => state.data.data);
    console.log(random)

    useEffect(() => {
        console.log("Fetched comments");
        dispatch(fetchComments());
    }, [dispatch]);

    const handleSubmit = (values,actions) => {
        console.log(values);
        if(editIndex){
            console.log('Updated')
            dispatch(updateComments({id:editIndex,text:values}))
            setEditIndex(null)
        }
        else{            
            dispatch(addComments(values));
        }
        setObj({ first: "", last: "", email: "", roll: "" });
        actions.resetForm({ values: { first: "", last: "", email: "", roll: "" } });
    };

    const handleDelete = (ind) => {
        console.log("delete",random[ind]._id);
        dispatch(deleteComments(random[ind]._id));
    };

    function handleEdit(ind){
        const item=random[ind];
        setEditIndex(item._id);
        setObj(item)
        console.log(item);
        
    }
    return (
        <>
            <h1 className="text-orange-600 text-3xl text-center m-4 p-4">Form:</h1>
            <Formik initialValues={obj} enableReinitialize={true} validationSchema={userSchema} onSubmit={handleSubmit}>
                {({errors,touched})=>(
                <Form className="text-center p-4 m-4">
                    <label className="p-4 m-4 text-xl">First Name:</label><br />
                    <Field type="text" className="p-2 border border-black text-black" name="first" />
                    {errors.first && touched.first && <p className="text-red-700">{errors.first}</p>}
                    <br />
                    <label className="p-4 m-4 text-xl">Last Name:</label><br />
                    <Field className="p-2 border border-black" type="text" name="last"/>
                    {errors.last && touched.last && <p className="text-red-700">{errors.last}</p>}
                    <br />
                    <label className="p-4 m-4 text-xl"> Email:</label><br />
                    <Field type="text" className="p-2 border border-black" name="email" />
                    {errors.email && touched.email && <p className="text-red-700">{errors.email}</p>}
                    <br />
                    <label className="p-4 m-4 text-xl">Roll No.</label><br />
                    <Field type="text" className="p-2 border border-black" name="roll" />
                    {errors.roll && touched.roll && <p className="text-red-700">{errors.roll}</p>}
                    <br />
                    <button type="submit" className="p-4 m-4 bg-gray-700 text-white">Submit</button>
                </Form>
                )}
            </Formik>  
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
                    {random && random.map((e,ind) => (
                        <tr key={e._id}>
                            <td className="border border-black">{e?.first}</td>
                            <td className="border border-black">{e?.last}</td>
                            <td className="border border-black">{e.email}</td>
                            <td className="border border-black">{e?.roll}</td>
                            <td>
                                <button onClick={()=>handleEdit(ind)} className="text-white bg-blue-600 m-2 p-2">Edit</button>
                                <button onClick={() => handleDelete(ind)} className="text-white bg-red-600 m-2 p-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Fetch;
