import React from "react"

const Pizza = (props) => {
  // console.log(props)

  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian ? "vegetarian" : "non-vegetarian"}</td>
      <td><button onClick={() => props.populateForm(props.pizza)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
