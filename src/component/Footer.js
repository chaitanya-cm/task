import React from "react";
import "./Footer.css";

const Footer = () =>{
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Address</h4>
            <ui className="list-unstyled">
              <li>342-420-6969</li>
              <li>Maharastra , India</li>
              <li>123 Street, South pune</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Social Link</h4>
            <ui className="list-unstyled">
              <li>FaceBook</li>
              <li>Instagram</li>
              <li>github</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Page Links</h4>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>Products</li>
              <li>Reports</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row-fo">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Company Name | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;