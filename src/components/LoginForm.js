import React from 'react'

const LoginForm = ({ username, password, loginHandler, fieldChangeHandler }) => {
  return (
    <div>
      <h2>Kirjaudu</h2>

      <form onSubmit={loginHandler}>
        <div>
          Käyttäjätunnus
        <input
            type="text"
            name="username"
            value={username}
            onChange={fieldChangeHandler}
          />
        </div>
        <div>
          Salasana
        <input
            type="password"
            name="password"
            value={password}
            onChange={fieldChangeHandler}
          />
        </div>
        <button>Kirjaudu</button>
      </form>
    </div>
  )
}

export default LoginForm