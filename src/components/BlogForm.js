import React from 'react'
import Notification from './Notification'

const BlogForm = ({ blog, submitHandler, fieldChangeHandler, message }) => (
  <div>
    <h2>Create new</h2>
    <Notification message={message} style='message' />

    <form onSubmit={submitHandler}>
      <div>
        Title
        <input
          name="title"
          value={blog.title}
          onChange={fieldChangeHandler}
        />
      </div>
      <div>
        Author
        <input
          name="author"
          value={blog.author}
          onChange={fieldChangeHandler}
        />
      </div>
      <div>
        URL
        <input
          name="url"
          value={blog.url}
          onChange={fieldChangeHandler}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
)

export default BlogForm