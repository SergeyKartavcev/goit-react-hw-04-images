import React from 'react';
import { useEffect } from 'react';

import S from './Modal.module.css';

function Modal ({ children, onClose }) {
  useEffect(()=> {
    window.addEventListener('keydown', this.handleKeyDown);
    return ()=> {window.removeEventListener('keydown', handleKeyDown());}
  })



 const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

 const handleBackdpropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

    

    return (
      <div className={S.Overlay} onClick={handleBackdpropClick()}>
        <div className={S.Modal}>{children}</div>
      </div>
    );
  
}

export default Modal;
