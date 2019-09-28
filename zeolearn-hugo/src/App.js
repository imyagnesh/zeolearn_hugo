import React, { Component, createContext } from 'react'
import Todos from './containers/todos/Todos'

export const { Provider, Consumer } = createContext()

export default class App extends Component {
  state = {
    greet: 'Hello Initial Greet'
  }

  // constructor(props) {
  //   super(props);
  //   console.log('constructor')
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   return null
  // }
  
  // componentDidMount() {
  //   console.log('componentDidMount');
  // }


  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }
  
  

  render() {
    const { greet } = this.state
    return (
      <Provider value={this.state}>
          <h1>{greet}</h1>
          <button onClick={()=> this.setState({greet: 'Hello Updated Greet'})}>Change Greet</button>
          <Todos />
      </Provider>
    )
  }
}