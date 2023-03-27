import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Account from "../pages/Account"
import Login from "../pages/Login"
import PopularMovies from "../pages/PopularMovies";

const RoutesApp = () => {
    return (
        <>
            
            <Router>
                <Fragment>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<PopularMovies />}/>
                        <Route path="/Account" element={<Account />}/>
                        <Route path="/Login" element={<Login />} />
                    </Routes>
                </Fragment>
            </Router>
        </>
    )
}

export default RoutesApp