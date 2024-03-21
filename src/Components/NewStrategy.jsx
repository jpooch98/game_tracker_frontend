import axios from "axios";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppUserContext } from "./AppUserContext";
import * as Yup from "yup";
import React from "react";

export default function NewStrategy(){
    const location = useLocation()
    const [userId, setUserId] = useContext(AppUserContext)
    const currentGameId = location.state
    const gameId = currentGameId    
    console.log(location)
    const formik = useFormik({
        initialValues:{
            strategyName:"",
            strategyDescription:""
        },
        validationSchema: Yup.object({
            strategyName: Yup.string().max(256, "Exceded character limit of 256 for strategy name").required("Strategy name is requred to create a new strategy"),
            strategyDescription: Yup.string().max(2000, "Exceded charater limit of 2000 for strategy description").required("Strategy description is required to create a new strategy")
        }),
        onSubmit:()=>{
            console.log(formik.values.strategyName, formik.values.strategyDescription)
            axiosPost(formik.values.strategyName, formik.values.strategyDescription, gameId, userId)
        }
    })

    return(
        <>
            <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea rows="2" cols="25" placeholder="Strategy Name"
                        id="strategyName"
                        name="strategyName"
                        onChange={formik.handleChange}
                        value={formik.values.strategyName}>
                        </textarea>
                    </div>
                    <div>
                    <textarea rows="5" cols="25" placeholder="Strategy Description"
                        id="strategyDescription"
                        name="strategyDescription"
                        onChange={formik.handleChange}
                        value={formik.values.strategyDescription}
                    />
                </div>
                <button type="submit">Create Strategy</button>
                <div>{formik.errors.strategyDescription}</div>
                <div>{formik.errors.strategyName}</div>
            </form>
        </>
    )
}


// Need to finish the strategy post request uncomment out on App.js when done

function axiosPost(name, description, gameId, userId){
    const strategy = {
        strategyName: name,
        strategyDescription: description
    }
    console.log(strategy)
    console.log(gameId)
    axios.post(`http://localhost:8080/strategy/user/${userId}/game/${gameId}`,strategy)

}