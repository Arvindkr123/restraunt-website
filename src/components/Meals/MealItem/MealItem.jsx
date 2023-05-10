import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/cart-context'

const MealItem = ({ id, name, price, description }) => {
    price = `$${price.toFixed(2)}`
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (amount) => {
        console.log(amount);
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <MealItemForm onAddToCart={addToCartHandler} />
        </li>
    )
}

export default MealItem
