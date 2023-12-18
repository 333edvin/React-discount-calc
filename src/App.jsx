import './App.css';
import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function App() {
  const formRef=useRef(null);
  const[amt,setAmt]=useState(0)
  const[rate,setRate]=useState(0)
  const[discountamt,setDiscountamt]=useState(0)
  const[payamt,setPayamt]=useState(0)


 const discount=(e)=>{
  e.preventDefault();
const discountamt=amt*rate/100;
const amountpay=amt-discountamt;
setDiscountamt(discountamt)
setPayamt(amountpay)

 }
 const reset=()=>{
   formRef.current.reset();  
  setDiscountamt(0)
  setPayamt(0)
 }
  return (
      <div className="App">
       <Container >
       
      <Row className='row mt-5 p-4 rounded-4'>
        <Col  className='p-5'>
        <Form ref={formRef}>
        <h1 className='head-name '>Discount Calculator</h1>
       <Form.Group className="my-4" controlId="formBasicEmail">       
        <Form.Control type="text" onChange={(e)=>setAmt(e.target.value)} placeholder="Enter Amount" />
        
      </Form.Group>

      <Form.Group className="my-4" controlId="formBasicPassword">
        <Form.Control type="text" onChange={(e)=>setRate(e.target.value)} placeholder="Discount %" />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={discount} className='btn btn-primary fw-medium '>  Calculate  </Button>
    </Form>
     
        </Col>
            <Col  xl={5} className=' head-name p-5 ' >
            <h3>You are Saving </h3>
            <p className='text-white fw-bold'>₹ {discountamt} /-</p>
            
            <h3>Amount You Pay</h3>
            <p className='text-white fw-bold'> ₹ {payamt} /-</p>
            <Button variant="primary" type="submit" onClick={reset} className='btn btn-warning fw-medium mt-3'>  Reset  </Button>
            </Col>
        </Row>
          
    </Container>
     

     
    </div>
  );
}

export default App;
