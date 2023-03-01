import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";
Suggest.propTypes = {
  data: PropTypes.arr,
};

function Suggest(props) {
  const { data } = props;
  return (
    <div className="Suggest">
      {data.map((item) => (
        <>
          <p key={item.id} className="Suggest__name">
            {" "}
            <FontAwesomeIcon icon={faSearch} />
            {item.Title}
          </p>
        </>
      ))}
    </div>
  );
}

export default Suggest;
