import axios from "axios";
import React, { createContext } from "react";
import { APIKey } from "../config/key";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    
    function createToken() {
        fetch(`
        https://api.themoviedb.org/3/authentication/token/new?api_key=${APIKey}`)
        .then(response => response.json())
        .then(data => {localStorage.setItem("session_token", data.request_token); console.log(data)})
        .catch(err => console.log(err))
    };

    function requestSession() {
        return (window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem("session_token")}?redirect_to=http://localhost:3000/Account`)
    }

    const createSession = () => {

        const bodyConfig = {
            request_token: localStorage.getItem("session_token")
        }

        const init = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bodyConfig)
        }
        fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=${APIKey}`, init)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("api", data.session_id); console.log(localStorage.api)
        })
        .catch(err => console.log(err))
    };

    return <AuthContext.Provider value={{ createToken, requestSession, createSession }}>{children}</AuthContext.Provider>
}