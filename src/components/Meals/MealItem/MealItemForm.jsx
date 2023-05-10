import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
    const [amountInputIsValid, setAmountInputIsValid] = useState(true);
    const amountInputRef = useRef();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = Number(amountInputRef.current.value);
        if (String(enteredAmount).trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setAmountInputIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmount);
    }
    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input label={'Amount'} ref={amountInputRef} input={{
                id: 'Amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button type='submit'> + Add</button>
            {!amountInputIsValid && <p>enter the all input fields please entered amount (1 to 5)</p>}
        </form>
    )
}

export default MealItemForm
