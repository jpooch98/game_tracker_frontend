import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function Account(){

    const [userExists, setUserExists] = useState("")

    const formik = useFormik({
        initialValues:{
            username:"",
            password:""
        },
        validationSchema: Yup.object({
            username: Yup.string().min(7, "Username must be at least 7 chatacters").max(15, "Exceded character limit of 15 for username").required("Username is requred"),
            password: Yup.string().min(7, "Password must be at least 7 characters").max(15, "Exceded charater limit of 15 for password").required("Password is required")
        }),
        onSubmit:()=>{
            axiosPost(formik.values.username, formik.values.password)
        }
    })

    return(
        <>
            <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea rows="2" cols="25" placeholder="Username"
                        id="username"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}>
                        </textarea>
                    </div>
                    <div>
                    <textarea rows="2" cols="25" placeholder="Password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <button to="/games" type="submit">Sign up</button>
                <div>{formik.errors.username}</div>
                <div>{formik.errors.password}</div>
                <div>{userExists}</div>
            </form>
        </>
    )

    function axiosPost(username, password){
        const appUser = {
            username: username,
            password: password
        }
        console.log( appUser)
        axios.post('http://localhost:8080/newUser', appUser)
            .catch(function(error){
                if(error.response.status !== 200) {
                    setUserExists("username already in use")
            }})
    
    }
}

