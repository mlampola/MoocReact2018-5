import React from 'react'
import Blog from './Blog'

const BlogList = ({ user, blogs, logoutHandler }) => {
  return (
    <div>
      <h2>Blogs</h2>
      <p>{user} logged in &nbsp;
          <button onClick={logoutHandler}>Logout</button>
      </p>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>)
}

export default BlogList