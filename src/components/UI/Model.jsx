import React from 'react'
import classes from './Model.module.css'
import ReactDOM from 'react-dom'


export const Backdrop = props => {
    return <div className={classes.backdrop}></div>
}

export const ModelOverlay = props => {
    return <div className={classes.model}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement = document.getElementById('overlays');
const Model = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
        </React.Fragment>
    )
}

export default Model
