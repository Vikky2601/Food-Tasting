import React from "react";
import MenuItem from "./menuItem";
import "bootstrap/dist/css/bootstrap.min.css";
import uni from "../assets/logo/uni.png";
import user from "../assets/logo/profile.jpg";
const menuItems = [
  { name: "Home", to: "/", exact: true },
  { name: "Tasting", to: "/tasting", exact: true },
  { name: "Sample", to: "/sample", exact: true },
  { name: "Survey", to: "/survey", exact: true },
  {
    name: "Administration",
    to: "#",
    exact: true,
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
    to: "#",

    exact: true,
    subMenus: [
      // { name: "Admin Reports", to: "/report/admin-repports" },
      { name: "User Screening", to: "/report/user-screening" },
      { name: "Generate SDC Export", to: "/report/generate-sdc-export" },
    ],
  },
  {
    name: "Support",
    to: "#",

    exact: true,
    subMenus: [
      {
        name: "Degreed Learning Pathway",
        href: "https://degreed.com/account/login?returnUrl=%2Fpathway%2F3pm3gkzz8n%3Fpath%3Dsensory---product-tasting-training--sta---fal-",
      },

      {
        name: "Guidelines STAs",
        href: "https://unilever.sharepoint.com/sites/FoodCTIChefmanship/Shared%20Documents/General/03%20Guidelines/031%20CTI/03111%20Structured%20Team%20Assessment/Guidelines%20Structured%20Team%20Assessments%20Foods%20-%20June%202020.pdf",
      },

      {
        name: "Popup blocker/export issue",
        href: "http://tdmttoolseu.unilever.com/foodstastingapp/img/PopUpBlockerDisable.pdf",
      },

      {
        name: "User manual",
        href: "https://unilever.sharepoint.com/sites/FoodCTIChefmanship/_vti_history/512/Shared%20Documents/General/03%20Guidelines/031%20CTI/03111%20Structured%20Team%20Assessment/Food%20Tasting%20Application%20-%20User%20Manual%20-%20June2020.pdf",
      },
    ],
  },
];
const Header = (props) => {
  // const userInfo = document.querySelector(".user-detail");
  // let show = false;
  // const showUserDetails = () => {
  //   if (show === false) {
  //     userInfo.classList.add("dblock")
  //     show = true;
  //   } else {
  //     userInfo.classList.remove("dblock")
  //     show = false;
  //   }
  // }
  const showSideMenu = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const user = document.querySelector(".user-info");
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
      x.className += " responsive";
      menuBtn.classList.add("open");
      user.classList.add("user-info-d-none");
    } else {
      x.className = "topnav";
      menuBtn.classList.remove("open");
      user.classList.remove("user-info-d-none");
    }
  };
  return (
    <div className="header-section d-lg-block">
      <div onClick={showSideMenu} className="menu-btn">
        <div className="menu-btn__burger"></div>
      </div>
      <div className="header-bottom sticky-header">
        <img className="nav-logo" src={uni} alt="logo" />
        <div class="topnav" id="myTopnav">
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              iconClassName={menuItem.iconClassName}
              exact={menuItem.exact}
              subMenus={menuItem.subMenus || []}
            />
          ))}
        </div>
        <div  className="user-info">
          <img src={user} alt="user" />
          <h6>Nicte Rayen</h6>
        </div>
        {/* <div className="user-detail box-shadow ">
          <p className="mt-2">Name: Nicte Rayen</p>
          <p>Email: <span>nicherayan@unilever.com</span></p>

          <button className="signout-btn">Sign Out</button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
