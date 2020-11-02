import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const AlertEmail = ({
  onDismiss,
  visible,
  children
}) => {
  
  return (
    <CSSTransition
      in={visible}
      timeout={400}
      classNames="default-transition"
      unmountOnExit
      onEnter={()=>onDismiss}
      onExited={()=>onDismiss}
      appear
    >
      <div className="alertEmail" >
        <p className="alertEmail__message">{children}</p>
        <a className="alertEmail__x" onClick={onDismiss}>X</a>
      </div>
    </CSSTransition>
  );
}

export default AlertEmail;

