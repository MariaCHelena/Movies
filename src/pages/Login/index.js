import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import * as C from './styles'

const Login = () => {

  const { createSession } = useAuth()

  useEffect(() => {
    createSession()
  }, [])

  return (
    <>
      <p>o login foi realizado com sucesso!</p>
      <C.Button>
        <Link to="/Account">Visualizar dados da sua conta</Link>
      </C.Button>
    </>
  )
}

export default Login