import React from 'react'
import Header from "./../../../SharedModule/Components/Header/Header";
import headerimg from "../../../../assets/images/header.png";
export default function CategoresList() {
  return (
    <>
      <Header
        title={"Categories "}
        titlee={"item"}
        description={
          "You can now add your items that any user can order it from the Application and you can edit"
        }
        imgUrl={headerimg}
      />
    </>
  )
}
