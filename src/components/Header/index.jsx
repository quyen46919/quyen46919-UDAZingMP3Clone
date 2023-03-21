import React, { useEffect, useRef, useState } from 'react';
import { data } from '../../data/test';
import Box from './BoxInput';
import BoxInputFocus from './BoxInputFocus';
import './style.scss';
import {
    faArrowLeft,
    faArrowRight,
    faArrowUp,
    faCancel,
    faDiamond,
    faDownload,
    faGroupArrowsRotate,
    faIndustry,
    faSearch,
    faTShirt,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Headers(props) {
    const [text, setText] = useState('');
    const [isBox, setIsBox] = useState(false);
    const inputUseRef = useRef(null);

    useEffect(() => {
        if (isBox) {
            inputUseRef.current.focus();
        }
    }, [isBox]);
    const handleCancel = () => {
        setText('');
    };
    const filterData = (text) => {
        const arrFilter = data.filter((item) => item.Title.includes(text));
        return arrFilter;
    };
    const handleText = (e) => {
        setText(e.target.value);
    };
    const handleBox = (e) => {
        console.log(e.target.className);
        if (
            e.target.className === 'header__input--box' ||
            e.target.className === 'header__inputFocus--posi'
        ) {
            setIsBox(true);
        } else {
            setIsBox(false);
        }
    };
    console.log('check is box', isBox);
    return (
        <div
            className="header"
            onClick={(e) => {
                handleBox(e);
            }}
        >
            <div className="header__left">
                {' '}
                <div className="header__translate">
                    <button className="header__translate--left">
                        {' '}
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className="header__translate--right">
                        {' '}
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                {/* imput */}
                {!isBox ? (
                    <Box
                        handleText={handleText}
                        handleBox={handleBox}
                        handleCancel={handleCancel}
                        faCancel={
                            <FontAwesomeIcon
                                icon={faCancel}
                                S
                                onClick={handleCancel}
                            />
                        }
                        faSearch={<FontAwesomeIcon icon={faSearch} />}
                        text={text}
                    />
                ) : (
                    <BoxInputFocus
                        filterData={filterData(text)}
                        faSearch={<FontAwesomeIcon icon={faSearch} />}
                        text={text}
                        inputUseRef={inputUseRef}
                        handleText={handleText}
                        handleCancel={handleCancel}
                        faCancel={faCancel}
                        faGroupArrowsRotate={
                            <FontAwesomeIcon icon={faGroupArrowsRotate} />
                        }
                        faArrowUp={<FontAwesomeIcon icon={faArrowUp} />}
                    />
                )}
            </div>

            <div className="header__right">
                {' '}
                <button className="header__dowload">
                    <FontAwesomeIcon icon={faDownload} className="faDowload" />
                    <p className="header__dowloadTitle"> Tải bản Window</p>
                </button>
                <div className="header__icon">
                    <div className="header__icon--chude">
                        {' '}
                        <FontAwesomeIcon icon={faTShirt} />
                    </div>
                    <div className="header__icon--vip">
                        {' '}
                        <FontAwesomeIcon icon={faDiamond} />
                    </div>
                    <div className="header__icon--install">
                        {' '}
                        <FontAwesomeIcon icon={faIndustry} />
                    </div>
                    <div className="header__icon--user">
                        {' '}
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Headers;
