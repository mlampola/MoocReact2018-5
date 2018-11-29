import React from 'react';
import { anecdoteActionFor } from './reducer'

class App extends React.Component {
  vote = (id) => () => {
    this.props.store.dispatch(
      anecdoteActionFor.voting(id)
    )
  }

  addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    this.props.store.dispatch(anecdoteActionFor.adding(anecdote))
    event.target.anecdote.value = ''
  }

  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name="anecdote" /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default App