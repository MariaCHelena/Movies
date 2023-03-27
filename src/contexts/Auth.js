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
        axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${APIKey}`, {
            request_token: localStorage.getItem("session_token")
        })
        .then(response => {localStorage.setItem("session_id", response.session_id); console.log(response)})
        .catch(err => console.log(err))
        /*
            axios({
            method: 'post',
            url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${APIKey}`,
            data: {
                request_token: token
            }
          }).then(response => console.log(response)).catch(err => console.log(err));
        */
    };

    return <AuthContext.Provider value={{ createToken, requestSession, createSession }}>{children}</AuthContext.Provider>
}