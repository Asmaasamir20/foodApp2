import React from "react";
import header from "../../../../assets/images/headerrr.png";
export default function Header() {
  return (
    <>
      <div className="Header my-3">
        <div className="container-fluid">
          <div className="row p-4">
            <div className="col-md-8 d-flex justify-content-center align-items-center">
              <div className="header-content text-white">
                <h2>Welcome Upskilling !</h2>
                <p className="px-3">
                  This is a welcoming screen for the entry of the application ,
                  you can now see the options
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="image-header text-center w-75">
                <img src={header} alt="" className="w-75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
