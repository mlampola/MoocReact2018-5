import React from 'react'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
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

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )
  }

  render() {
    return (
      <div>
        {this.state.user === null ?
          <LoginForm username={this.state.username}
            password={this.state.password}
            loginHandler={this.login}
            fieldChangeHandler={this.handleLoginFieldChange} /> :
          <BlogForm user={this.state.user.name} blogs={this.state.blogs} />
        }
      </div>
    );
  }
}

export default App;
