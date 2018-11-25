import React from 'react'

const BlogForm = ({ user, blog, submitHandler, fieldChangeHandler, logoutHandler }) => (
  <div>
    <h2>Blogs</h2>
    <p>{user} logged in &nbsp;
          <button onClick={logoutHandler}>Logout</button>
    </p>
    <h2>Create new</h2>

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