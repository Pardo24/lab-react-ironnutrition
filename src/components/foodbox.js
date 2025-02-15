import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const{food} = props
    const kcalories= food.calories*food.servings

   
    
  
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {kcalories} </b> kcal
        </p>
        <Button onClick={props.deletefood} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
