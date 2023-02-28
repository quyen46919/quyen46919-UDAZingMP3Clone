import React from "react";
import style from "./style.scss";
// import PropTypes from 'prop-types';

// Footer.propTypes = {

// };

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__player-controls">
        <div className="player-controls__info-left">
          <img
            src="	https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/7/4/d/1/74d144876bc7601f8fed3301cc7d1380.jpg"
            alt="img"
          />
        </div>
        <div className="player-controls__info-content">
          <p>Người Lạ Thoáng Qua</p>
          <p>Đinh Tùng Huy, ACV</p>
        </div>
        <div className="player-controls__info-">
          <i class="fa fa-heart-o"></i>
        </div>
      </div>
      <div className="footer__player-bar"></div>
      <div className="footer__player-icon"></div>
    </div>
  );
}

export default Footer;
