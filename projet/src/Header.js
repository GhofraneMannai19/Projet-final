import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import ControlledCarousel from './Carossel.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer.js';
import Project from './Project';
import {Link} from 'react-router-dom';
function Header(){
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
       <ControlledCarousel/>
    <div className="flex">
      <div className="about">  
        <h3 id="titre">about</h3>
        <p id="paragraphe">Welcome to our eStore! Here we provide you with top notch products  for your whatever your needs may be.Electronic gadgets, home appliances and premium quality clothes are available for you to buy within reasonable prices.Join us today and enjoy our offers and daily discounts!</p>
      </div>  
    </div>
    <Footer/>
    </>
    );
}
export default Header ;