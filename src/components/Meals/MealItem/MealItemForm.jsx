import React from 'react'

const MealItemForm = () => {
    return (
        <form>
            <label>Amount</label>
            <input type="number" placeholder='1' />
            <input type="submit" value={'+ Add'} />
        </form>
    )
}

export default MealItemForm
