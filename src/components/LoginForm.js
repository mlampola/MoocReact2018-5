import React from 'react'
import Notification from './Notification'

const LoginForm = ({ username, password, loginHandler, fieldChangeHandler, message }) => {
  return (
    <div>
      <h2>Log in to application</h2>
      <Notification message={message} style='error'/>

      <form onSubmit={loginHandler}>
        <div>
          Username
        <input
            type="text"
            name="username"
            value={username}
            onChange={fieldChangeHandler}
          />
        </div>
        <div>
          password
        <input
            type="password"
            name="password"
            value={password}
            onChange={fieldChangeHandler}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm