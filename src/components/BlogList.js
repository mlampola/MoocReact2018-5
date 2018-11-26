import React from 'react'
import Blog from './Blog'

const BlogList = ({ blogs, likeHandler, deleteHandler }) => {
  return (
    <div>
      {blogs
        .sort((a, b) => b.likes - a.likes)
        .map(blog =>
          <Blog key={blog.id} blog={blog} likeHandler={likeHandler} deleteHandler={deleteHandler} />
        )
      }
    </div>)
}

export default BlogList