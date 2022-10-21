import { useEffect } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

function Login() {
  const {token} = useSelector(state => state.authReducer)
  return token != null ? <Navigate to='/' /> :(
    <div>Login</div>
  )
}

export default Login