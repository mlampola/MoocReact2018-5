import React from 'react'
import PropTypes from 'prop-types'
import Notification from './Notification'

const LoginForm = ({ username, password, loginHandler, fieldChangeHandler, message }) => {
  return (
    <div>
      <h2>Log in to application</h2>
      <Notification message={message} messageStyle='error' />

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

LoginForm.propTypes = {
  loginHandler: PropTypes.func.isRequired,
  fieldChangeHandler: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default LoginForm