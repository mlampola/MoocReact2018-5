import React from 'react'
import TogglableItem from './TogglableItem'

const Blog = ({ blog, likeHandler, deleteHandler, loggedInUser }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const showWhenVisible = { display: blog.user ? (loggedInUser.username === blog.user.username ? '' : 'none') : '' }

  return (
    <div style={blogStyle}>
      <TogglableItem clickableText={blog.title + ' ' + blog.author}>
        <table>
          <tbody>
            <tr><td width="10"></td><td><a href={blog.url}>{blog.url}</a></td></tr>
            <tr><td></td><td>{blog.likes} likes &nbsp;
            <button id={blog.id} onClick={likeHandler}>Like</button>
            </td></tr>
            <tr><td></td><td>{blog.user ? 'added by ' + blog.user.name : ''}</td></tr>
          </tbody>
        </table>
        <div style={showWhenVisible}>
          <table>
            <tbody>
              <tr><td width="10"></td><td><button id={blog.id} onClick={deleteHandler}>Delete</button></td></tr>
            </tbody>
          </table>
        </div>
      </TogglableItem>
    </div>
  )
}

export default Blog