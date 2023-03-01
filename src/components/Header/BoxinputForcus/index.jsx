import React from "react";
import PropTypes from "prop-types";
import Suggest from "../Song";
import Song from "../Suggest";
import { filterData } from "../../../data/test";
import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
BoxinputForcus.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleText: PropTypes.func.isRequired,
};

function BoxinputForcus(props) {
  const {
    faSearch,
    faGroupArrowsRotate,
    faArrowUp,
    text,
    inputUseRef,
    handleText,
    handleCancel,
  } = props;
  return (
    <div className="Headers__inputForcus">
      <div className="Headers__inputForcus--posi">
        <div className="Headers__inputForcus--input">
          <button type="text" className="Headers__inputForcus--search">
            {faSearch}
          </button>
          <input
            type="text"
            value={text}
            className="Headers__inputForcus--box"
            placeholder="Tìm kiếm bài hát, lời bài hát, nghệ sĩ,..."
            ref={inputUseRef}
            onChange={(e) => {
              handleText(e);
            }}
          />
          {text.length >= 1 && (
            <FontAwesomeIcon icon={faCancel} onClick={handleCancel} />
          )}
        </div>
        <div className="Headers__list">
          <div className="Headers__list--title">
            {text.length <= 0 ? "Đề xuất cho bạn" : "Từ khóa liên quan"}
          </div>
          {text.length <= 0 ? (
            <div className="Headers__list--menu">
              <ul className="Headers__list--suggest">
                <li>
                  <a href="">{faGroupArrowsRotate} bí mật nhỏ</a>
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
              <Song data={filterData(text)} />
              <Suggest data={filterData(text)} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoxinputForcus;
