import React, { useEffect, useState } from "react";

import MenuItem from "./menuItem";

const menuItems = [
  { name: "Home", to: "/", exact: true, iconClassName: "bi bi-house-fill" },
  {
    name: "Tasting",
    to: "/tasting",
    exact: true,
    iconClassName: "bi bi-pencil-fill",
  },
  {
    name: "Sample",
    to: "/sample",
    exact: true,
    iconClassName: "bi bi-hexagon-fill",
  },
  {
    name: "Survey",
    to: "/survey",
    exact: true,
    iconClassName: "bi bi-calendar-check",
  },
  {
    name: "Administration",
    to: "/administration",
    exact: true,
    iconClassName: "bi bi-award-fill",
    subMenus: [
      { name: "Attribute", to: "/administration/attribute" },
      { name: "Attribute Set", to: "/administration/attribute-set" },
      { name: "Product Platform", to: "/administration/product-platform" },
      { name: "Tasting Type", to: "/administration/test-type" },
      { name: "Users", to: "/administration/users" },
      { name: "Category", to: "/administration/category" },
      { name: "Tasting Region", to: "/administration/tasting-region" },
      { name: "Product Group", to: "/administration/product-group" },
      { name: "Panel View", to: "/administration/panel-view" },
      { name: "Status", to: "/administration/status" },
    ],
  },
  {
    name: "Report",
    to: "/report",
    exact: true,
    iconClassName: "bi bi-flag-fill",
    subMenus: [
      { name: "Admin Reports", to: "/report/admin-repports" },
      { name: "User Screening", to: "/report/user-screening" },
      { name: "Generate SDC Export", to: "/report/generate-sdc-export" },
    ],
  },
  {
    name: "Support",
    to: "/support",
    exact: true,
    iconClassName: "bi bi-info-circle-fill",
    subMenus: [
      {
        name: "Degreed Learning Pathway",
        to: "/support/degreed-learning-pathway",
      },
      { name: "Guidelines STAs", to: "/support/guidelines-stas" },
      { name: "Popup blocker/export issue", to: "/support/popup-blocker" },
      { name: "User manual", to: "/support/user-manual" },
    ],
  },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }
    props.onCollapse(inactive);
  });
  const menuBtn = document.querySelector(".menu-btn");
  console.log(menuBtn);
  const navScroll = (e) => {
    menuBtn.style.top = 48 - e.target.scrollTop + "px";
  };

  return (
    <div
      onScroll={navScroll}
      className={`side-menu ${inactive ? "inactive" : ""}`}
    >
      <div className="top-section">
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-circle-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-circle-fill"></i>
          )}
        </div>
      </div>
      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              iconClassName={menuItem.iconClassName}
              exact={menuItem.exact}
              subMenus={menuItem.subMenus || []}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
