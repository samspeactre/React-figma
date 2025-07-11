import type React from "react";
import "./Footer.css";
const Footer: React.FC = () => {
  return (
    <footer >
      <div className="footer-container">
        <div className="flex justify-between mb-2 ">
          <div className="col-30">
            <p className="fs-xl font-weight-700 m-0 mb-3">Funiro.</p>
            <p className="footer-placeholder fs-base">
              400 University Drive Suite 200 Coral <br /> Gables,
              <br /> FL 33134 USA
            </p>
          </div>
          <div className="flex justify-between col-70 links-container">
            <div className="flex justify-between gap-1 col-50">
              <div className="col-50">
                <p className="m-0 mb-3 footer-placeholder">Links</p>
                <ul className="line-none p-0 flex flex-col gap-3 font-weight-500 fs-base">
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="col-50">
                <p className="m-0 mb-3 footer-placeholder">Help</p>
                <ul className="line-none p-0 flex flex-col gap-3 font-weight-500 fs-base">
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>
            </div>
            <div className="col-50">
              <div className="pl-1">
                <p className="m-0 mb-3 footer-placeholder"> Newsletter </p>
                <div className="flex gap-1">
                  <input
                    className="news-input footer-placeholder fs-base p-0 pb-05"
                    type="text"
                    placeholder="Enter Your Email Address"
                  />
                  <button className="footer-btn p-0 pb-05 fs-base font-weight-500">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <p className="fs-base m-0 py-2">
          {new Date().getFullYear()} furino. All rights reverved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
