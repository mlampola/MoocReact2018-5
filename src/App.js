import React from 'react'
import LoginForm from './components/LoginForm'
import BlogList from './components/BlogList'
import blogService from './services/blogs'
import loginService from './services/login'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      error: null,
      username: '',
      password: '',
      user: null
    }
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedInBlogUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  logout = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedInBlogUser')
    blogService.setToken(null)
    this.setState({ username: '', password: '', user: null })
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedInBlogUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
    }

  }

  render() {
    return (
      <div>
        {this.state.user === null ?
          <LoginForm username={this.state.username}
            password={this.state.password}
            loginHandler={this.login}
            fieldChangeHandler={this.handleLoginFieldChange} /> :
          <BlogList user={this.state.user.name}
            blogs={this.state.blogs}
            logoutHandler={this.logout} />
        }
      </div>
    );
  }
}

export default App;
