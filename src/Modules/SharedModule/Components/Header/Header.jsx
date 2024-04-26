import React from "react";
import header from "../../../../assets/images/headerrr.png"
export default function Header() {
  return (
    <>
   <div className="me-4">
   <div className="container mx-3 mt-2 rounded-4 bg-success">
        <div className="row ">
          <div className="col-md-8 d-flex justify-content-center align-items-center">
            <div className="header-content text-white px-5">
              <h2>Welcome Upskilling !</h2>
              <p>
                This is a welcoming screen for the entry of the application ,
                you can now see the options
              </p>
            </div>
          </div>
          <div className="col-md-4 bg-info">
              <div className="image-header">
                <img src={header} alt=""  className="w-75"/>
              </div>
            </div>
        </div>
      </div>
   </div>
      
    </>
  );
}
