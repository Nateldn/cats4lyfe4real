import React, { useEffect, useState } from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Offcanvas, Button} from 'react-bootstrap';


// const Cart = () => {
//     return (
//         <div>Cats4Lyfe - Modal</div>
//     );
// }


// export default Cart

const Cart = ({ name, ...props }) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
          Add to Cart
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Basket</Offcanvas.Title>
          </Offcanvas.Header>
          {/* This is where we will pull are cat product items - requires to-d */}
          <Offcanvas.Body> 
            {/* This is where we will pull our cat product items - requires to-do list functionality */}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  const Modal = () => {
    return (
      <>
        {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
          <Cart key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }
  
export default Modal