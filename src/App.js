import React from 'react'
import LoginForm from './components/LoginForm'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null,
      title: '',
      author: '',
      url: '',
      message: null
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
        message: 'Wrong username or password',
      })
      setTimeout(() => {
        this.setState({ message: null })
      }, 5000)
    }
  }

  logout = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedInBlogUser')
    blogService.setToken(null)
    this.setState({ username: '', password: '', user: null })
  }

  addBlog = async (event) => {
    event.preventDefault()
    const savedBlog = await blogService.create({
      title: this.state.title,
      author: this.state.author,
      url: this.state.url
    })

    if (savedBlog) {
      this.setState({
        blogs: this.state.blogs.concat(savedBlog),
        message: `A new blog '${savedBlog.title}' by ${savedBlog.author} added`,
      })
      setTimeout(() => {
        this.setState({ message: null })
      }, 5000)
    }

    this.setState({
      title: '',
      author: '',
      url: ''
    })

  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleBlogFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  async componentDidMount() {
    const blogs = await blogService.getAll()
    this.setState({ blogs })

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
            fieldChangeHandler={this.handleLoginFieldChange}
            message={this.state.message} />
          :
          <div>
            <BlogForm user={this.state.user.name}
              blog={{
                title: this.state.title,
                author: this.state.author,
                url: this.state.url
              }}
              submitHandler={this.addBlog}
              fieldChangeHandler={this.handleBlogFieldChange}
              logoutHandler={this.logout}
              message={this.state.message} />
            <p></p>
            <BlogList blogs={this.state.blogs} />
          </div>
        }
      </div>
    )
  }
}

export default App;
