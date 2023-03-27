import React from 'react'
import { Link } from 'react-router-dom'
import * as C from './styles.js'
import useAuth from '../../hooks/useAuth.js'
import Button from '../button/index'
import UserProfile from '../userProfile/index.js'


const Navbar = () => {

    let { isLogged } = useAuth()
    const { requestSession } = useAuth()
    return (
        <C.Header>
            <C.Navbar>
                <C.Item>
                    <Link to="/">Home</Link>
                </C.Item>
                <C.Item>
                    {
                        (isLogged?<UserProfile />:<Button onClick={requestSession} text="Entrar"/>)
                    }
                </C.Item>
            </C.Navbar>
        </C.Header>
  )
}

export default Navbar