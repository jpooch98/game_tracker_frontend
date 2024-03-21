import axios from "axios";
import React, {useState} from "react";
import "../ComponentCss/GameRow.css"
import {Link} from "react-router-dom"


export default class GameRow extends React.Component{
    state = {
        games : []
    }

    componentDidMount(){
        axios.get('http://localhost:8080/allGames')
        .then(results=>{
            const games = results.data;
            this.setState({games});
            console.log(this.state.games)
        })
    }


    render(){
        return(
            <>
                <div className="title">All Current Games</div>
                {
                    this.state.games
                    .map(game =>
                        <div className="row" key={game.gameId}>
                            <Link to="/game" state={game} className="name">{game.gameName}</Link>
                            <div className="description">{game.gameDescription}</div>
                        </div>
                    )
                }
            </>
        )
    }
}
