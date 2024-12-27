import React from 'react'
import LoginForm from './LoginForm';
import Home from './Home'

const Auth = () => {
    const user=true;
  return (
    <div>
      {user ? <LoginForm /> : <Home />}
    </div>
  )
}

export default Auth
