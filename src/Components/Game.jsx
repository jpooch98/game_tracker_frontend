import axios from "axios"
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom"
import "../ComponentCss/Game.css"
import { Link } from "react-router-dom";
import { AppUserContext } from "./AppUserContext"
import { useContext } from "react"


// move the setting of the variables to inside the use effect to make
// sure they are initialized before the call?

export default function Game(){
    const [strategies, setStrategies] = useState([]);
    const location = useLocation()
    const currentGameId = location.state.gameId
    const gameId = currentGameId    
    const [userId, setUserId] = useContext(AppUserContext)
    

    useEffect(()=>{
        axios.get(`http://localhost:8080/strategy/game/${gameId}`)
        .then(results=>{
            const strategy = results.data;
            setStrategies(strategy);
        }
        );
    },[]);

    function showNewStrategy(userId){
        if(userId !== null){
            return <Link to='/newStrategy' state={gameId} className="button">Add Strategy</Link>

        }
        else{
            return(<div className="title">Log in to add strategies</div>)
        }
    }

    console.log(gameId)
    console.log(strategies)

        return(
            <>
                {showNewStrategy(userId)}
                 {
                    strategies
                    .map(strategy =>
                        <div className="row" key={strategy.strategyId}>
                            <div className="name">{strategy.strategyName}</div>
                            <div className="description">{strategy.strategyDescription}</div>
                            <div className="points">{strategy.points}</div>
                        </div>
                    )
                }
            </>
        )
    }