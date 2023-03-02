import React from 'react';
// import PropTypes from 'prop-types';

// Partner.propTypes = {
    
// };
import './style.scss'
function Partner(props) {
    const {images, details} = props
    return (
        <div className='partner'>
            <img className='partner__i' src={images} alt={details} />
        </div>
    );
}

export default Partner;