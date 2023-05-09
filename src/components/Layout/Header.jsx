import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes  from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <img src={mealsImage} className={classes['main-image']} alt="A table full of delicius food" />
        </React.Fragment>
    )
}

export default Header
