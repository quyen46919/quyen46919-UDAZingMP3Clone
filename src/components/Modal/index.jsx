import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"

Modal.propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
};
  
function Modal(props) {
    const {handleCloseModal} = props
    return (
        <div className='modal' onClick={handleCloseModal}>
            {props.children}
        </div>
    );
}

export default Modal;