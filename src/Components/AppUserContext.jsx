import { useState, createContext } from "react";
import React from "react";


export const AppUserContext = createContext();

export const AppUserProvider = (props) => {
    const [userId, setUserId] = useState(null)
    return(
        <AppUserContext.Provider value={[userId, setUserId]}>
            {props.children}
        </AppUserContext.Provider>
    )
}