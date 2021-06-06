import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

/*This can be separated too */
const Backdrop = props => {
    return <div calssName={classes.backdrop} onClick={props.onClose} />
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

// 
const portalElement = document.getElementById('overlays');

const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
        /* if we don't use portal 
        <React.Fragment>
            <Backdrop />
            <ModalOverlay>{props.children}</ModalOverlay>
        </React.Fragment> */
    );
};

export default Modal;