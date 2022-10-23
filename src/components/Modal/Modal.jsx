import React, { Component } from 'react';



import S from './Modal.module.css'


class Modal extends Component {

  componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown );
  }

  componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown );
  }

  handleKeyDown = (e) => {
      if (e.code === 'Escape') {
          this.props.onClose();
      }
  }

  handleBackdpropClick = e => {
      if(e.currentTarget === e.target) {
          this.props.onClose();
      }
  }

  render() {
      const { children } = this.props;

      return (
      <div className={S.Overlay} onClick={ this.handleBackdpropClick }>
          <div className={S.Modal} >
              { children }
          </div>
      </div>
      )
  }
}



export default Modal;



