import React from 'react'
import * as C from './styles'

const Login = () => {
  return (
    <>
      <p>o login foi realizado com sucesso!</p>
      <C.Button type="" onClick={window.location.href = 'http://localhost:3000/Account'}>
        Visualizar dados da sua conta
      </C.Button>
    </>
  )
}

export default Login