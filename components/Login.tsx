import React from 'react'
import { useMoralis } from 'react-moralis'

function Login() {
    const {authenticate} = useMoralis()
  return (
    <div>
        <button onClick={()=>authenticate()}>Login</button>
    </div>
  )
}

export default Login