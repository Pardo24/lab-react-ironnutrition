import { Input, Divider, Button } from 'antd';
import { useState } from 'react';
import App from '../App';



function AddFoodForm(props) {
    const [name, nameUpdate] = useState("")
const [image, imageUpdate] = useState("")
const [calories, caloriesUpdate] = useState(0)
const [servings, servingsUpdate] = useState(0)


const funcSubmit = (e) =>{
  e.preventDefault();
  const newFood ={
    name,
    image,
    calories,
    servings
  }
  props.addFood(newFood)

  nameUpdate('')
  imageUpdate('')
  caloriesUpdate(0)
  servingsUpdate(0)
}


return (
  <form onSubmit={funcSubmit}>
    <Divider>Add Food Entry</Divider>

    <label>Name</label>
    <Input value={name} type="text" onChange={(e) => {nameUpdate(e.target.value)}} />

    <label>Image</label>
    <Input value={image} type="text" onChange={(e) => {imageUpdate(e.target.value)}} />

    <label>Calories</label>
    <Input value={calories} type="number" onChange={(e) => {caloriesUpdate(e.target.value)}} />

    <label>Servings</label>
    <Input value={servings} type="number" onChange={(e) => {servingsUpdate(e.target.value)}} />

    <button type="submit">Create</button>
  </form>
  
);
}


export default AddFoodForm