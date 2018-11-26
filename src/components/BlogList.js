import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs, likeHandler }) => {
  return (
    <div>
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map(blog =>
          <Blog key={blog.id} blog={blog} likeHandler={likeHandler} />
        )
      }
    </div>)
}

export default BlogList