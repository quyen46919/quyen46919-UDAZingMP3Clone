import React from 'react';
import PropTypes from 'prop-types';
import Suggest from '../Song';
import Song from '../Suggest';
import { faCancel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';
BoxInputFocus.propTypes = {
    handleCancel: PropTypes.func.isRequired,
    handleText: PropTypes.func.isRequired,
};

function BoxInputFocus(props) {
    const {
        faSearch,
        faGroupArrowsRotate,
        faArrowUp,
        text,
        inputUseRef,
        handleText,
        handleCancel,
        filterData,
    } = props;
    return (
        <div className="header__inputFocus">
            <div className="header__inputFocus--posi">
                <div className="header__inputFocus--input">
                    <button type="text" className="header__inputFocus--search">
                        {faSearch}
                    </button>
                    <input
                        type="text"
                        value={text}
                        className="header__inputFocus--box"
                        placeholder="Tìm kiếm bài hát, lời bài hát, nghệ sĩ,..."
                        ref={inputUseRef}
                        onChange={(e) => {
                            handleText(e);
                        }}
                    />
                    {text.length >= 1 && (
                        <FontAwesomeIcon
                            icon={faCancel}
                            onClick={handleCancel}
                        />
                    )}
                </div>
                <div className="header__list">
                    <div className="header__list--title">
                        {text.length <= 0
                            ? 'Đề xuất cho bạn'
                            : 'Từ khóa liên quan'}
                    </div>
                    {text.length <= 0 ? (
                        <div className="header__list--menu">
                            <ul className="header__list--suggest">
                                <li>
                                    <a href="">
                                        {faGroupArrowsRotate} bí mật nhỏ
                                    </a>
                                </li>
                                <li>
                                    <a href=""> {faArrowUp} #zingchart</a>
                                </li>
                                <li>
                                    <a href=""> {faArrowUp} Top nổi bật</a>
                                </li>
                                <li>
                                    <a href=""> {faArrowUp} Nhạc trẻ</a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Song data={filterData} />
                            <Suggest data={filterData} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BoxInputFocus;
