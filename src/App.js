import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { createStore } from 'redux'

const App = () => (
  <BrowserRouter>
  <div class="container text-center mt-5">
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/blog/:id" component={Blog} />
    <Route path="/sum/:num1/:num2" component={Sum} />
  </div>
  </BrowserRouter>
)

const vote = (state=0, action) => {
  switch (action.type) {
    case 'ADD' :
      return state + 1
      
    default:
      return state
      
  }
}

let store = createStore(vote)

const Home = () => {
  store.dispatch({ type: 'ADD' })
  store.dispatch({ type: 'ADD' })
  store.dispatch({ type: 'ADD' })
  let x = store.getState();
  return (
    <div>
      <h1>WELCOME</h1>
      <p>投票数: {x}</p>
      <p><Link to="/about">ABOUT</Link></p>
    </div>
  )
}

const About = () => {
  store.dispatch({ type: 'ADD' })
  let x = store.getState().toString();
  return (
    <div>
      <h1>About</h1>
      <p>投票数: {x}</p>
    </div>
  )
}

const Blog = props => {
  const { id } = props.match.params

  return (
    <p>{id}番目の記事です。</p>
  )
}

const Sum = props => {
  const { num1, num2 } = props.match.params

  return (
  <p>{num1} + {num2} = {parseInt(num1) + parseInt(num2)}</p>
  //ここではparseIntは型の変換をしている(stringからnumberへ)
  )
}

export default App;