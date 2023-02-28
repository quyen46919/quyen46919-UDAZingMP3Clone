import React from "react";
import "./style.scss";

Headers.propTypes = {};

function Headers(props) {
  return (
    <div className="Headers">
      <div className="Headers__translate">
        <button className="Headers__translate--left">P</button>
        <button className="Headers__translate--right">N</button>
      </div>
      {/* imput */}
      <div className="Headers__input">
        <input type="text" className="Headers__input--wirte" />
        <button type="text" className="Headers__input--seach">
          search
        </button>
      </div>
      <button className="Headers__dowload">Dow load</button>
      <div className="Headers__icon">
        <div className="Headers__icon--chude">icon1</div>
        <div className="Headers__icon--chude">icon1</div>
        <div className="Headers__icon--chude">icon1</div>
        <div className="Headers__icon--chude">icon1</div>
      </div>
    </div>
  );
}

export default Headers;
