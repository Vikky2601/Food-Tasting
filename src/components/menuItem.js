import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);
  return (
    <li onClick={onClick} className="">
      <NavLink
        className="text-fff "
        exact={exact}
        to={to}
        onClick={() => {
          setExpand(!expand);
        }}
      >
        {name}
      </NavLink>
      <div className={`dropdown`}>
        {subMenus && subMenus.length > 0 ? (
          <>
            <div className="dropdown-content">
              {subMenus.map((menu, index) => (
                <NavLink
                  key={index}
                  to={menu.href ? { pathname: menu.href } : menu.to}
                  target={menu.href ? "_blank" : null}
                >
                  {menu.name}
                </NavLink>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </li>
  );
};

export default MenuItem;
