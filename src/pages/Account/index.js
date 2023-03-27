import React, { useEffect   } from 'react'
import useAuth from '../../hooks/useAuth'
import * as C from './styles'

const Account = () => {
    
    const { createSession } = useAuth()

    useEffect(() => {
        console.log(sessionStorage)
    }, [])
    
    return (
        <C.Container>
            Teste
            <button onClick={createSession}>aaaaaaaaaa</button>
        </C.Container>
    )
}

export default Account