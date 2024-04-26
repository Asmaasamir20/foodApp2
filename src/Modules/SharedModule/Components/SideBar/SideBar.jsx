import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Link } from "react-router-dom";
import toggle from "../../../../assets/images/3.png";

export default function SideBar({ logout }) {
  const [isCollapse, setIsCollapse] = useState(false);
  const toggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <div>
      <div className="sideBar">
        <Sidebar collapsed={isCollapse}>
          <div onClick={toggleCollapse} className="mt-3">
            <img src={toggle} alt="" className=" toggle" />
          </div>
          <Menu
            menuItemStyles={{
              button: {
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [`&.active`]: {
                  backgroundColor: "#13395e",
                  color: "#b6c8d9",
                },
              },
            }}>
            <MenuItem
              icon={<i className="fa-solid fa-house"></i>}
              component={<Link to="Dashboard" />}>
              Home
            </MenuItem>
            <MenuItem
              icon={<i className="fa-solid fa-user-group"></i>}
              component={<Link to="UsersList" />}>
              Users
            </MenuItem>
            <MenuItem
              icon={<i className="fa-solid fa-table-cells-large"></i>}
              component={<Link to="RecipesList" />}>
              Recipes
            </MenuItem>
            <MenuItem
              icon={<i className="fa-solid fa-calendar-days"></i>}
              component={<Link to="CategoresList" />}>
              Categores
            </MenuItem>
            <MenuItem
              icon={<i className="fa-solid fa-unlock"></i>}
              component={<Link to="ChangePassword" />}>
              ChangePassword
            </MenuItem>
            <MenuItem
              onClick={logout}
              icon={<i className="fa-solid fa-right-from-bracket"></i>}>
              LogOut
            </MenuItem>
          </Menu>
        </Sidebar>
        ;
      </div>
    </div>
  );
}
