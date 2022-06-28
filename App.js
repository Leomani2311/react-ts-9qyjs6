import React, { Component } from 'react'
import ram from './ram.js'

class App extends Component{
  render(){
    return(
    <div className= "App" >
      <ram name="Brue" heroName="Badman">
        <p> This is children props</p>
      </ram>
      <ram name="Clark" heroName="Superman">
      </ram>
      <ram name="Diana" heroName="Wonder Woman">
      </ram>
    </div>
    )
  }
}