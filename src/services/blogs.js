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

export default { setToken, getAll, create }