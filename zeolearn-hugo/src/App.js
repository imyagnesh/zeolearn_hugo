import React, { Component } from 'react'
import Todos from './containers/todos/Todos'

export default class App extends Component {
  state = {
    greet: 'Hello Initial Greet'
  }

  constructor(props) {
    super(props);
    console.log('constructor')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return null
  }
  
  componentDidMount() {
    console.log('componentDidMount');
  }


  shouldComponentUpdate(nextProps, nextState) {
    return true
  }
  
  

  render() {
    console.log('render')
    const { greet } = this.state
    return (
      <>
        <h1>{greet}</h1>
        <button onClick={()=> this.setState({greet: 'Hello Updated Greet'})}>Change Greet</button>
        <Todos />
      </>
    )
  }
}