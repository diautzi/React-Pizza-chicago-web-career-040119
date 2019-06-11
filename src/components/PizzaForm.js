import React from "react"

const PizzaForm = props => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={event => props.changeTopping(event.target.value)} type="text" className="form-control" placeholder="Pizza Topping" value={
                props.pizza.topping ? props.pizza.topping : ""
              }/>
        </div>
        <div className="col">
          <select onChange={event => props.changeSize(event.target.value)} value={props.pizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={event => props.changeVegetarian(event.target.value)} className="form-check-input" type="radio" value={true} checked={props.pizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={event => props.changeVegetarian(event.target.value)} className="form-check-input" type="radio" value={false} checked={!props.pizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.updatePizzas}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
