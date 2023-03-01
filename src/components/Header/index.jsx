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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Box from "./Boxinput";
import BoxinputForcus from "./BoxinputForcus";
import "./style.scss";

Headers.propTypes = {};

function Headers(props) {
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);
  const inputUseRef = useRef(null);

  useEffect(() => {
    if (box) {
      inputUseRef.current.focus();
    }
  }, [box]);
  const handleCancel = () => {
    try {
      setText("");
    } catch (error) {
      console.log("dlfsf", error);
    }
  };
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleBox = (e) => {
    if (
      e.target.className === "Headers__input--box" ||
      e.target.className === "Headers__inputForcus--posi" ||
      e.target.className === "Headers__list--title"
    ) {
      setBox(true);
      return;
    } else {
      setBox(false);
    }
    console.log(e.target);
  };

  return (
    <div
      className="Headers"
      onClick={(e) => {
        handleBox(e);
      }}
    >
      <div className="Headers__left">
        {" "}
        <div className="Headers__translate">
          <button className="Headers__translate--left">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="Headers__translate--right">
            {" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        {/* imput */}
        {box === false ? (
          <Box
            handleText={handleText}
            handleBox={handleBox}
            handleCancel={handleCancel}
            faCancel={
              <FontAwesomeIcon icon={faCancel} onClick={handleCancel} />
            }
            faSearch={<FontAwesomeIcon icon={faSearch} />}
            text={text}
          />
        ) : (
          <BoxinputForcus
            faSearch={<FontAwesomeIcon icon={faSearch} />}
            text={text}
            inputUseRef={inputUseRef}
            handleText={handleText}
            handleCancel={handleCancel}
            faCancel={faCancel}
            faGroupArrowsRotate={<FontAwesomeIcon icon={faGroupArrowsRotate} />}
            faArrowUp={<FontAwesomeIcon icon={faArrowUp} />}
          />
        )}
      </div>

      <div className="Headers__right">
        {" "}
        <button className="Headers__dowload">
          <FontAwesomeIcon icon={faDownload} className="faDowload" />
          <p className="Headers__dowloadTitle"> Tải bản Window</p>
        </button>
        <div className="Headers__icon">
          <div className="Headers__icon--chude">
            {" "}
            <FontAwesomeIcon icon={faTShirt} />
          </div>
          <div className="Headers__icon--vip">
            {" "}
            <FontAwesomeIcon icon={faDiamond} />
          </div>
          <div className="Headers__icon--install">
            {" "}
            <FontAwesomeIcon icon={faIndustry} />
          </div>
          <div className="Headers__icon--user">
            {" "}
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headers;
