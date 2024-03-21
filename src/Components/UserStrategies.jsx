import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppUserContext } from "./AppUserContext";
import "../ComponentCss/UserStrategies.css"

export default function UserStrategies(){
    const [userId, setUserId] = useContext(AppUserContext)
    const [strategies, setStrategies] = useState([])

    useEffect(()=>{
        axiosGetStrategies(userId, setStrategies)
    },[])

    function showContent(){
        console.log(strategies)
        if(strategies.length > 0) {
            return(
            strategies.map(strategy=>
                <div className="row" key={strategy.strategyId}>
                        <div className="name">{strategy.strategyName}</div>
                        <div className="description">{strategy.strategyDescription}</div>
                        <div className="points">{strategy.points}</div>
                    </div>
                ))
        }
        else{
            return(<div className="notification">You have no strategies yet</div>)
        }
    }

    return(
        <>
            {
                showContent()
            }
        </>
    )

}

function axiosGetStrategies(userId, setStrategies){
    axios.get(`http://localhost:8080/strategy/user/${userId}`)
        .then(response=> setStrategies(response.data))
}