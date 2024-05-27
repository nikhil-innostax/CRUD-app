import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser, addUser, updateUser } from "../App/DataAction";
import { Formik,Form,Field } from "formik";
import { userSchema } from "../userSchema";



const FormFormik = ({editUser,setEditUser,userDetails,setUserDetails}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    const handleSubmit = (values,actions) => {
        if(editUser){
            dispatch(updateUser({id:editUser,text:values}))
            setEditUser(null)
        }
        else{            
            dispatch(addUser(values));
        }
        setUserDetails({ first: "", last: "", email: "", roll: "" });
        actions.resetForm({ values: { first: "", last: "", email: "", roll: "" } });
    };

    
    return (
        <>
            <h1 className="text-orange-600 text-3xl text-center m-4 p-4">Form:</h1>
            <Formik initialValues={userDetails} enableReinitialize={true} validationSchema={userSchema} onSubmit={handleSubmit}>
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
            
        </>
    );
};

export default FormFormik;
