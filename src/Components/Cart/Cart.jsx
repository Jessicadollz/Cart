import React, { useEffect, useState } from 'react'
import './Cart.css'

function Cart({item}) {
  const[total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(0)
    let a = 0;
    item.map(item => {
        a = a + item.price * item.quantity;
    })
    setTotal(a);
  },[item]);

  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        {item.map(item => {
            return (
                <>
                    <div className="cartItem">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                    </div>
                </>
            );
        })}
        <p>Total: {total}</p>
      </div>
    </>
  )
}

export default Cart
