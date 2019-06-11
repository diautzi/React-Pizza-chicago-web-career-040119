import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    editPizza: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pizzas").then(resp => resp.json())
    .then(pizzas => this.setState({
      pizzas: pizzas
    }))
  }
  populateForm = pizza => {
    this.setState({
      editPizza: pizza
    })
  }

  changeTopping = topping => {
    const newPizza = {...this.state.editPizza}
    newPizza.topping = topping
    this.setState({
      editPizza: newPizza
    })
  }

  changeSize = size => {
    const newPizza = {...this.state.editPizza}
    newPizza.size = size
    this.setState({
      editPizza: newPizza
    })
  }

  changeVegetarian = veggie => {

    const newPizza = {...this.state.editPizza}
    newPizza.vegetarian = veggie === "true"
    this.setState({
      editPizza: newPizza
    })
  }

  updatePizzas = () => {
    if (this.state.editPizza.id) {
      fetch(`http://localhost:3000/pizzas/${this.state.editPizza.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify(this.state.editPizza)
      }).then(resp => this.setState({
        editPizza: {}
      }))
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
        pizza={this.state.editPizza}
        changeTopping={this.changeTopping}
        changeSize={this.changeSize}
        changeVegetarian={this.changeVegetarian}
        updatePizzas={this.updatePizzas}/>
        <PizzaList pizza={this.state.pizzas} populateForm={this.populateForm}/>
      </Fragment>
    );
  }
}

export default App;
