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
    console.log('Post blog: ', exception)
  }
}

const update = async (updatedBlog) => {
  const config = {
    headers: { 'Authorization': token }
  }

  const blog =
  {
    likes: updatedBlog.likes,
    author: updatedBlog.author,
    title: updatedBlog.title,
    url: updatedBlog.url
  }

  if (updatedBlog.user) {
    blog.user = updatedBlog.user._id
  }

  try {
    const response = await axios.put(baseUrl + '/' + updatedBlog.id, blog, config)
    return response.data
  }
  catch (exception) {
    console.log('Update blog: ', exception)
  }
}

const remove = async (blog) => {
  const config = {
    headers: { 'Authorization': token }
  }

  try {
    const response = await axios.delete(baseUrl + '/' + blog.id, config)
    console.log(response)
    return response.data
  }
  catch (exception) {
    console.log('Delete blog: ', exception)
    throw new Error('Unauthorized')
  }
}

export default { setToken, getAll, getById, create, update, remove }