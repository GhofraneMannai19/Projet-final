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
function Contact() {
    
    return(
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
        <div style={{  display: "flex",
    marginLeft: "39px",
    marginRight:" auto",
    width: "8em",
    marginTop: "48px"
}}>
            <img src="Contact.jpg" style={{ width:"40em" , height: "70vh" ,     marginRight: "50px"}}/>
        
        <Form style={{marginTop:"100px"  }} >
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  style={{ width: '20rem' }}/>
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
    
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" style={{ width: '20rem' }} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
    </div>
   <Footer/>
    </>
    );
}
export default Contact;