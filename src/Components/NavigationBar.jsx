import { useContext } from "react"
import "../ComponentCss/NavigationBar.css"
import {Link} from "react-router-dom"
import { AppUserContext } from "./AppUserContext"

export default function NavigationBar(){
    const [userId, setUserId] = useContext(AppUserContext)
    var content = null
        if(userId===null){
            content = (
                <div className="bar">
                <Link to="/games" className="item">Games</Link>
                <Link to="/createAccount" className="item">Create Account</Link>
                <Link to="/loggin" className="item">Log in</Link>
                </div>
            )
        }if(userId !==null){
            content = (
                <div className="bar">
                <Link to="/games" className="item">Games</Link>
                <Link to="/addGame" className="item">Add Game</Link>
                <Link to="/userStrategies" className="item">Your Strategies</Link>
                <Link to="/Logout" className="item" onClick={()=>{setUserId(null)}}>Log Out</Link>
                </div>
            )
        }

    return(
       content
    );
}
