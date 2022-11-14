import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import { CartState } from '../context/Context'
import { Button,Row,Col,Image } from 'react-bootstrap';
import Rating from './Rating'
import { AiFillDelete } from 'react-icons/ai';
import './style.css'

const Cart = () => {

  const { state:{cart}, dispatch } = CartState();

  const [total,setTotal] = useState();

  useEffect(()=> {
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty, 0))
  },[cart])

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((prod)=>{
            return (
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.image} alt={prod.name} fluid rounded/>
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>$ {prod.price}</Col>
                  <Col md={2}>
                    <Rating rating={prod.ratings} />
                  </Col>
                  <Col md={2}>
                    <Button  type="button" variant="light" 
                      onClick={()=> dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload : prod
                      })
                      }>
                      <AiFillDelete />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>
      <div className='filters summary'>
          <span className='title'>Total: ({cart.length}) products</span>
          <span style={{fontWeight:700, fontSize: 20}}>Total: $ {total}</span>
          <Button type="button" disabled={cart.length===0}>
            Proceed 
          </Button>
      </div>
    </div>
  )
}

export default Cart