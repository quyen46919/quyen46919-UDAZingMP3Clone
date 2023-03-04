import React from "react";
import style from "./style.scss";
// import PropTypes from 'prop-types';

// Footer.propTypes = {

// };

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__player-controls">
        <div className="footer__player-controls__info-left">
          <a href="#">
            <img
              src="	https://photo-resize-zmp3.zadn.vn/w240_r1x1_webp/cover/7/4/d/1/74d144876bc7601f8fed3301cc7d1380.jpg"
              alt="img"
            />
          </a>
        </div>
        <div className="footer__player-controls__info-content">
          <p>Người Lạ Thoáng Qua</p>
          <p>Đinh Tùng Huy, ACV</p>
        </div>
        <div className="footer__player-controls__info-right btn">
          <i class="fa fa-heart-o"></i>
          <i class="fa fa-ellipsis-h"></i>
        </div>
      </div>
      <div className="footer__player-bar">
        <div className="footer__player-bar__top">
          <div className="btn btn-radom">
            <i class="fa fa-random"></i>
          </div>
          <div className="btn btn-prev">
            <i class="fa fa-step-backward"></i>
          </div>
          <div className="btn btn-toggle">
            <i class="fa fa-play"></i>
          </div>
          <div className="btn btn-next">
            <i class="fa fa-step-forward"></i>
          </div>
          <div className="btn btn-repeat">
            <i class="fa fa-refresh"></i>
          </div>
        </div>
        <div className="footer__player-bar__bottom">
          <p class="times-left">00:01</p>
          <input type="range" className="hr" name="" id="" />
          <p class="times-right">05:00</p>
        </div>
      </div>
      <div className="footer__player-icon">
        <button>MV</button>
        <div className="btn">
          <i class="fa fa-microphone"></i>
        </div>
        <div className="btn">
          <i class="fa fa-window-restore"></i>
        </div>
        <div className="btn">
          <i class="fa fa-volume-up"></i>
        </div>
        <div className="btn">
          <i class="fa fa-list-ul"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
