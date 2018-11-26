import React from 'react'
import TogglableItem from './TogglableItem'

const Blog = ({ blog, likeHandler }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={blogStyle}>
      <TogglableItem clickableText={blog.title + ' ' + blog.author}>
        <table>
          <tbody>
            <tr><td width="10"></td><td><a href={blog.url}>{blog.url}</a></td></tr>
            <tr><td></td><td>{blog.likes} likes &nbsp;
            <button  id={blog.id} onClick={likeHandler}>Like</button>
            </td></tr>
            <tr><td></td><td>added by {blog.user.name}</td></tr>
          </tbody>
        </table>
      </TogglableItem>
    </div>
  )
}

export default Blog