import React from 'react'
import LoginForm from './components/LoginForm'
import BlogList from './components/BlogList'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import Notification from './components/Notification'
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
      message: null,
      error: null
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
        error: 'Wrong username or password',
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

  like = async (event) => {
    const blog = await blogService.getById(event.target.id)
    if (blog) {
      blog.likes = blog.likes + 1
      const updatedBlog = await blogService.update(blog)
      this.setState({ blogs: this.state.blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog) })
      console.log(updatedBlog)
    }
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

  deleteBlog = async (event) => {
    const blog = await blogService.getById(event.target.id)
    if (blog) {
      blog.likes = blog.likes + 1

      try {
        if (window.confirm(`Delete '${blog.title}' by ${blog.author}?`)) {
          await blogService.remove(blog)
          this.setState({ blogs: this.state.blogs.filter(b => b.id !== blog.id) })
          console.log('Deleted: ', blog)
        }
      }
      catch (error) {
        console.log('Delete failed : ', error)
        this.setState({
          error: error.message
        })
        setTimeout(() => {
          this.setState({ error: null })
        }, 5000)
      }
    }
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
          <div className="login">
            <LoginForm username={this.state.username}
              password={this.state.password}
              loginHandler={this.login}
              fieldChangeHandler={this.handleLoginFieldChange}
              message={this.state.error} />
          </div>
          :
          <div className="blogs">
            <h2>Blogs</h2>
            <p>{this.state.user.name} logged in &nbsp;
              <button onClick={this.logout}>Logout</button>
            </p>
            <Notification message={this.state.error} messageStyle='error' />
            <Togglable buttonLabel="Create new...">
              <BlogForm blog={{
                title: this.state.title,
                author: this.state.author,
                url: this.state.url
              }}
                submitHandler={this.addBlog}
                fieldChangeHandler={this.handleBlogFieldChange}
                message={this.state.message} />
            </Togglable>
            <p></p>
            <BlogList blogs={this.state.blogs}
              likeHandler={this.like}
              deleteHandler={this.deleteBlog}
              loggedInUser={this.state.user} />
          </div>
        }
      </div>
    )
  }
}

export default App;
