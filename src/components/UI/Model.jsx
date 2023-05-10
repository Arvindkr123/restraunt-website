import React from 'react'
import classes from './Model.module.css'
import ReactDOM from 'react-dom'


export const Backdrop = ({onClick}) => {
    return <div onClick={onClick} className={classes.backdrop}></div>
}

export const ModelOverlay = props => {
    return <div className={classes.model}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement = document.getElementById('overlays');
const Model = ({onClose, children}) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModelOverlay>{children}</ModelOverlay>, portalElement)}
        </React.Fragment>
    )
}

export default Model
