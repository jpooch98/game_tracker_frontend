import axios from "axios";
import { useFormik } from "formik";
import { useState, useContext } from "react";
import { AppUserContext } from "./AppUserContext"
import * as Yup from "yup";

export default function Loggin(){
    const [userId, setUserId] = useContext(AppUserContext)
    const [incorrectLoggin, setIncorrectLoggin] = useState("")

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
                <button type="submit">Log In</button>
                <div>{formik.errors.username}</div>
                <div>{formik.errors.password}</div>
                <div>{incorrectLoggin}</div>
            </form>
        </>
    )

    function axiosPost(username, password){
        const appUser = {
            username: username,
            password: password
        }
        axios.post('http://localhost:8080/loggin', appUser)
            .then(response => {
                if(response.data >= 1){
                    setIncorrectLoggin("logged in")
                    setUserId(response.data)
                }
                else{
                    setIncorrectLoggin("username or password is incorrect")
                }
            })
            // .catch(function(error){
            //     if(error.response.status !== 200) {
            //         setIncorrectLoggin("Loggin information is incorrect")
            // }})
    
    }
}

