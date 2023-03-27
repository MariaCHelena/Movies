import React from 'react'
import useAuth from '../../hooks/useAuth'
import * as C from './style'

const UserProfile = () => {

  const { userInfo } = useAuth()

  return (
    <C.User>
        <C.Imagem src='src\components\userProfile\avatar.svg' alt="Foto de perfil do usuário" />
        <C.Span>{userInfo.username}</C.Span>
    </C.User>
  )
}

export default UserProfile