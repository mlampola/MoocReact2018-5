import React from 'react'
import Blog from './Blog'

const BlogForm = ({ user, blogs }) => {
  return (
    <div>
      <h2>Blogs</h2>
      <p>{user} logged in</p>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>)
}

export default BlogForm