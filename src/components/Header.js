import React from 'react'
import { Container, Form, Navbar,Dropdown,Nav, Badge, Button} from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { CartState } from '../context/Context'
import './style.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const { state : {cart}, dispatch ,productDispatch} = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{height:'80px'}}>
        <Container>
            <Navbar.Brand style={{fontSize : 30 }}>
                <a href="/">Shopping cart</a>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <Form.Control style={{ width:500}} placeholder="Search for a product" className="m-auto"
                    onChange={(e)=> {productDispatch({
                        type:"FILTER_BY_SEARCH",
                        payload: e.target.value
                    })}}
                />
            </Navbar.Text>

            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success"  id="dropdown-basic" >
                        <FaShoppingCart color="white" fontSize="25px"/>
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth:370, float:'right'}}
                        align="end"
                        title="Dropdown end"
                        id="dropdown-menu-align-end"
                    >
                        {cart.length>0?(
                            <>
                            {cart.map((prod)=>(
                                <span className='cartItem' key={prod.id}> 
                                    <img className='cartItemImg'
                                        src={prod.image}
                                        alt={prod.name}
                                    />
                                    <div className='cartItemDetail'>
                                        <span>{prod.name}</span>
                                        <span>${prod.price}</span>
                                    </div>
                                    <AiFillDelete 
                                        fontSize="20px"
                                        style={{ cursor:'pointer'}}
                                        onClick={()=>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload : prod
                                            })
                                        }
                                    />
                                </span>
                            ))
                            }
                            <Link to='/cart'> 
                                <Button style={{ width:'95%', margin:" 0 10px" }}>
                                    Go to Cart
                                </Button>
                            </Link>
                            </>
                        ):(
                            <span style={{ padding:10 }}>Card is Empty!</span>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header