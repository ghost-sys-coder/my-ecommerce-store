import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import Cart from './Cart';
import { useStateContext } from '../context/stateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const handleClick = () => {
    setShowCart(true);
  }

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>commercePro</Link>
      </p>

      <button type="button" className='cart-icon' onClick={handleClick}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{ totalQuantities }</span>
      </button>
      {setShowCart && <Cart />}
    </div>
  )
}

export default Navbar