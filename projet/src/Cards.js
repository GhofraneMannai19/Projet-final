import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';
function Cards(Props) {
    const [count,setCount]=useState(0);
  return (
   <Card style={{ width: '20rem',marginBottom:'20px' }}>
  <Card.Img variant="top" src={Props.img} style={{ height: '50vh'}}/>
  <Card.Body>
    <Card.Title>{Props.children}</Card.Title>
    <Card.Text>
      {Props.somme}
    </Card.Text>
    <Button variant="primary" style={{ color: '#282c34'  }}  onClick={Props.addToBasket}>Add to Card</Button>
    <div className="plus">
    <i class="fas fa-minus-circle" style={{ color: '#282c34' }} onClick={() => setCount(count-1)}></i>
    <span>{count}</span>
    <i class="fas fa-plus-circle" style={{ color: '#282c34' }} onClick={() => setCount(count+1)}></i>
    </div>
  </Card.Body>
</Card>
  );
}

export default Cards;