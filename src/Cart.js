import React, { useEffect, useState } from 'react'
import './App.scss';

//Get Bootstrap CSS and Offcanvas styles
import 'bootstrap/dist/css/bootstrap.min.css'
import {Offcanvas, Button} from 'react-bootstrap';


// const Cart = ({ name, ...props }) => {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow} className="me-2">
//           Add to Cart
//         </Button>
//         <Offcanvas show={show} onHide={handleClose} {...props}>
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Basket</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body> 
//             {/* This is where we will pull our cat product items - requires to-do list functionality */}

//           </Offcanvas.Body>
//         </Offcanvas>
//       </>
//     );
//   }
  
//   const Modal = () => {
//     return (
//       <>
//         {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//           <Cart key={idx} placement={placement} name={placement} />
//         ))}
//       </>
//     );
//   }
  
// export default Modal


const Cart = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div className='button_wrap'>
      <Button variant="primary" onClick={handleShow}>
        Add to Cart
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


