import React from 'react'
import headerimg from "../../../../assets/images/header.png"
import Header from './../../../SharedModule/Components/Header/Header';
export default function RecipesList() {
  return (
    <>
    <Header title={"Recipes "} titlee={"Items"} description={"You can now add your items that any user can order it from the Application and you can edit"} imgUrl={headerimg}/>
    </>
  )
}
