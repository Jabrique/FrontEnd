import React from "react";
import FurnLogo from "./FurnLogo";

function FurnFooter() {
  return (
    <footer>
      <div className="footer__profile">
        <FurnLogo></FurnLogo>
        <p className="footer__text">Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        <div className="footer__socials">
          <div className="footer__twitter"></div>
          <div className="footer__faceBook"></div>
          <div className="footer__pinterest"></div>
        </div>
      </div>
      <div className="footer__links">
        <h4>Quick links</h4>
        <ul>
          <li>
            <a href="">Image Licensin</a>
          </li>
          <li>
            <a href="">Style Guide</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer__links">
        <h4>Shop Category</h4>
        <ul>
          <li>
            <a href="">Image Licensin</a>
          </li>
          <li>
            <a href="">Style Guide</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer__links">
        <h4>Partners</h4>
        <ul>
          <li>
            <a href="">Image Licensin</a>
          </li>
          <li>
            <a href="">Style Guide</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <p className="footer__copyright">Copyright &copy;2023 All rights reserved | This template is made with love</p>
    </footer>
  );
}

export default FurnFooter;
