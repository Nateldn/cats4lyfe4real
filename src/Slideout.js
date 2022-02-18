import React, { useState } from 'react'
import './App.scss';
import Basket from './Basket';
//Get Bootstrap CSS and Offcanvas styles
import 'bootstrap/dist/css/bootstrap.min.css'
import {Offcanvas, Button} from 'react-bootstrap';


const Cart = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div className='button_wrap'>
      <Button variant="primary" onClick={handleShow}>
        Add to Basket
        </Button>
      </div>
        
  
        <Offcanvas placement="end" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Basket</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* This is where we will pull our cat product items - requires to-do list functionality */}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
export default Cart


