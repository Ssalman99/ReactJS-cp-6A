// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    this.setState(prevState => ({count: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>

          <p className="pera">
            Generate a random number in the range of 0 to 100
          </p>

          <button type="button" className="button" onClick={this.onGenerate}>
            Generate
          </button>

          <p className="pera1">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
