import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useCallback } from "react";
import "../ComponentCss/AddGame.css"

export default function AddGame(){
    const formik = useFormik({
        initialValues: {
            gameName:"",
            gameDescription:""
        },
        validationSchema: Yup.object({
            gameName: Yup.string().max(256, "Exceded character limit of 256 for game name").required("Game name is requred to create a new game"),
            gameDescription: Yup.string().max(2000, "Exceded charater limit of 2000 for game description").required("Game description is required to create a new game")
        }),
        onSubmit:()=>{
            console.log(formik.values.gameName, formik.values.gameDescription)
            axiosPost(formik.values.gameName, formik.values.gameDescription)
        }
    })

    return(
        <>
            <div className="center">
                Make a new Game
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                <textarea rows="2" cols="25" placeholder="Game Name"
                        id="gameName"
                        name="gameName"
                        onChange={formik.handleChange}
                        value={formik.values.gameName}>
                        </textarea>
                    </div>
                    <div>
                    <textarea rows="5" cols="25" placeholder="Game Description"
                        id="gameDescription"
                        name="gameDescription"
                        onChange={formik.handleChange}
                        value={formik.values.gameDescription}
                    />
                </div>
                <button type="submit">Create Game</button>
                <div>{formik.errors.gameDescription}</div>
                <div>{formik.errors.gameName}</div>
            </form>
        </>
    )
}

function axiosPost(name, description){
    const game = {
        gameName: name,
        gameDescription: description
    }
    console.log(game)
    axios.post('http://localhost:8080/game',game)

}