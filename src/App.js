import './App.css';
import foods from './foods.json';
import {useState} from 'react'
import FoodBox from './components/foodbox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/form';
import Search from './components/search';
import { getValue } from '@testing-library/user-event/dist/utils';

function App() {

  const [foodies, foodiesUpdate] = useState(foods)
  const [mostrar, cambiarmostrar] =useState(false)

  const addNewFood= (newFood) =>{
    const updatedFoods = [...foodies, newFood]
    foodiesUpdate(updatedFoods)
  }

  const search= (input) => {
     foodiesUpdate(foods.filter(foods=>foods.name.toLowerCase().includes(input.toLowerCase())))
  }

  const funcionButton= () =>{
   cambiarmostrar(!mostrar)
}

const deletefood=(index)=>{
    const remainingFood = [foodies.splice[index]]
    foodiesUpdate(remainingFood)    
  }



  return (
    <div className="App">
    {mostrar&&
    <AddFoodForm addFood={addNewFood}/>}
    <Button onClick={()=>funcionButton()}>{mostrar?"Hide form": "Add food"}</Button>
    <Search search={search}/>
    <Divider>Food List</Divider>
    
    <Row style={{ width: '100%', justifyContent: 'center' }}>
    {foodies.map((food, i)=>{
      return(
          <FoodBox 
            index= {i}
            food={food}
            deletefood={deletefood}
          />
      )
    })} 
    </Row>
      
    </div>
  );
}

export default App;
