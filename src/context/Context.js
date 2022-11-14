import { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer,productReducer } from './Reducer';

const Cart = createContext();
faker.seed(30)

const Context = ({children}) => {

    const products = [...Array(30)].map(()=>({
        id : faker.datatype.uuid(),
        name : faker.commerce.productName(),
        price : faker.commerce.price(),
        image : faker.image.city(),
        inStock : faker.datatype.boolean(),
        fastDelivery : faker.datatype.boolean(),
        ratings : faker.random.numeric( { bannedDigits: ['0'] },{bannedDigits:['6']},{bannedDigits:['7']},{bannedDigits:['8']},{bannedDigits:['9']})
    }))

    const [state,dispatch] = useReducer(cartReducer,{
      products : products,
      cart : []
    })

    const [productState,productDispatch] = useReducer(productReducer,{
      byFastDelivery:false,
      byRating:0,
      searchQuery:"",
    })

  return (
    <Cart.Provider value={{ state,dispatch,productState,productDispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => {
  return useContext(Cart)
}