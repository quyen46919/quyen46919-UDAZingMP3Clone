import React from 'react';
import './style.scss'

// Partner.propTypes = {
//     images: PropTypes.string.isRequired,
// };

function Partner(props) {
    const {images} = props;
    return (
        <div className='partner'>
            <img className='partner__images' src={images} />
        </div>
    );
}

export default Partner;