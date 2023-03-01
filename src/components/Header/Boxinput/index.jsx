import React from 'react';
import PropTypes from 'prop-types';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

BoxInput.propTypes = {
    handleBox: PropTypes.func.isRequired,
    handleText: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
};

function BoxInput(props) {
    const { handleText, handleBox, handleCancel, faSearch, text } = props;
    return (
        <div className="header__input">
            <button type="text" className="header__input--search">
                {faSearch}
            </button>
            <input
                type="text"
                value={text}
                className="header__input--box"
                placeholder="Tìm kiếm bài hát, lời bài hát, nghệ sĩ,..."
                onChange={(e) => handleText(e)}
                onClick={(e) => {
                    handleBox(e);
                }}
            />
            {text.length >= 1 && (
                <FontAwesomeIcon icon={faCancel} onClick={handleCancel} />
            )}
        </div>
    );
}

export default BoxInput;
