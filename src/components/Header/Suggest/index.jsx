import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';
Suggest.propTypes = {
    data: PropTypes.array.isRequired,
};

function Suggest(props) {
    const { data } = props;
    return (
        <div className="suggestion">
            {data.map((item) => (
                <>
                    <p key={item.id} className="suggestion__name">
                        {' '}
                        <FontAwesomeIcon icon={faSearch} />
                        {item.Title}
                    </p>
                </>
            ))}
        </div>
    );
}

export default Suggest;
