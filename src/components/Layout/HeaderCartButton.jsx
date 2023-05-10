import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
    const CartCtx = useContext(CartContext);
    const numberOfCartItems = CartCtx.items.reduce((acc, cur) => acc += cur.amount, 0);
    return (
        <button onClick={onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton
