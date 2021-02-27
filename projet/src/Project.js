import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards.js';
import React,{useState} from "react";
import Footer from './Footer.js';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import './App.css';
function Project() {
  const [basketNumbers, setBasketNumbers] = useState(0);

    const addToBasket = () => {
      setBasketNumbers(oldBasketNum => oldBasketNum + 1); };
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Estore</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/Project">Project</Nav.Link>
    <Nav.Link href="/Contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-info">Search</Button>
    </Form>
</Navbar>
<br/>
<br/>
<br/>
<div style={{ display: 'flex' , justifyContent:'space-around', flexWrap:'wrap' }}>
<a href="/cart"> <svg fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg> Cart (0)</a>
   <Cards   somme="100" img="./1.jpg" addToBasket="addToBasket">Buffalo - Striploin</Cards>
   <Cards somme="56" img="./2.jpg">Bacardi Breezer - Tropical</Cards>
   <Cards somme="67" img="./3.jpg">Wine - Gato Negro Cabernet</Cards>
   <Cards somme="89" img="./4.jpg">Cabbage - Nappa</Cards>
   <Cards somme="90" img="./5.jpg">Sping Loaded Cup Dispenser</Cards>
   <Cards somme="123" img="./6.jpg">Bread - Malt</Cards>
   <Cards somme="140" img="./7.jpg">Glass Clear 8 Oz</Cards>
   <Cards somme="179" img="./8.jpg">Sour Puss Raspberry</Cards>
</div>
<Footer/>
</>
  );
}

export default Project;