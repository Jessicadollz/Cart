import './App.css'
import Product from './Components/ProductList/Product'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {

  const[item, setItem] = useState([
    {name:"product1", price:100, quantity:1},
    {name:"product2", price:200, quantity:1},
    {name:"product3", price:300, quantity:1},
    {name:"product4", price:400, quantity:1}
  ]);

  return (
    <>
    <div className="main">
      <Product item={item} setItem={setItem} />
      <Cart item={item} />
    </div>
    </>
  )
}

export default App
