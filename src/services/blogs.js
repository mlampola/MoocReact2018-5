import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/blogs'
let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getById = async (id) => {
  const response = await axios.get(baseUrl)
  const blogs = response.data.filter(blog => blog.id === id)
  return (blogs && blogs.length === 1) ? blogs[0] : null
}

const create = async (newBlog) => {
  const config = {
    headers: { 'Authorization': token }
  }

  try {
    const response = await axios.post(baseUrl, newBlog, config)
    return response.data
  }
  catch (exception) {
    console.log('Blog service:', exception)
  }
}

const update = async (updatedBlog) => {
  const config = {
    headers: { 'Authorization': token }
  }

  const blog =
  {
    user: updatedBlog.user._id,
    likes: updatedBlog.likes,
    author: updatedBlog.author,
    title: updatedBlog.title,
    url: updatedBlog.url
  }

  try {
    const response = await axios.put(baseUrl + '/' + updatedBlog.id, blog, config)
    return response.data
  }
  catch (exception) {
    console.log('Blog service:', exception)
  }
}

export default { setToken, getAll, getById, create, update }