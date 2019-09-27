import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/input';
import ClearButton from './components/ClearButton';
import * as math from 'mathjs'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
     }
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val })
  }

  addZeroInput = val => {
    if(this.state.input !== "") {
      this.setState({ input: this.state.input + val })
    }
  }

  addDecimal = val => {
    if(this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val })
    }
  }

  addNegative = () => {
    if(this.state.input !== "") {
      this.setState({ input: this.state.input * -1 })
    }
  }

  handleEqual = () => {
    this.setState({currentNumber: this.state.input},() => {
      if(this.state.operator === "plus"){
        this.setState({ input: JSON.stringify(parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)) },() => {
          this.setState({operator: ""})
        })
      }
      else if(this.state.operator === "substract"){
        this.setState({ input: JSON.stringify(parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)) },() => {
          this.setState({operator: ""})
        })
      }
      else if(this.state.operator === "multiply"){
        this.setState({ input: JSON.stringify(parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)) },() => {
          this.setState({operator: ""})
        })
      }
      else if(this.state.operator === "division"){
        this.setState({ input: JSON.stringify(parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)) },() => {
          this.setState({operator: ""})
        })
      }
      else if(this.state.operator === "power"){
        this.setState({operator: ""})
      }
      else if(this.state.operator === "sqrt"){
        this.setState({operator: ""})
      }
    })
  }

  add = () => {
    if(this.state.operator === "") {
      this.setState({previousNumber:this.state.input},() => {
        this.setState({input:""})
        this.setState({operator: "plus"})
      })
    }
  }

  substract = () => {
    if(this.state.operator === "") {
      this.setState({previousNumber:this.state.input},() => {
        this.setState({input:""})
        this.setState({operator: "substract"})
      })
    }
  }

  multiply = () => {
    if(this.state.operator === "") {
      this.setState({previousNumber:this.state.input},() => {
        this.setState({input:""})
        this.setState({operator: "multiply"})
      })
    }
  }

  division = () => {
    if(this.state.operator === "") {
      this.setState({previousNumber: this.state.input},() => {
          this.setState({input:""})
          this.setState({operator: "division"})
      })
    }
  }

  power = () => {
    if(this.state.operator === "") {
      this.setState({input: math.pow(this.state.input,2)},() => {
        this.setState({operator: "power"})
      })
    }
    else {
      this.setState({input: math.pow(this.state.input,2)},() => {
        this.setState({operator: ""})
      })
    }
  }

  handleSqrt = () => {
    if(this.state.operator === "") {
      this.setState({operator: "sqrt"},() => {
        this.setState({input: math.sqrt(this.state.input)})
      })
    }
  }

  render() {

    return (
      <div className="app" style={{borderRadius:20}}>
        <div className="calc-wrapper" >
          <Input input={this.state.input} />
          <div className="row">
            <ClearButton handleClear={() => this.setState({input:"",previousNumber:"",operator:"",currentNumber:""})}>Clear</ClearButton>
            <Button handleClick={this.addNegative}>+/-</Button>
            <Button handleClick={this.handleSqrt}>sqrt(2)</Button>
            <Button handleClick={this.division}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}> 7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.substract}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addZeroInput} style={{flex:1}}>0</Button>
            <Button handleClick={this.power}>x**2</Button>
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.handleEqual}>=</Button>
          </div>
        </div>
      </div>
     );
  }
}

export default App;
