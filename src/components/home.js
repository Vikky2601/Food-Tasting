import React from "react";
import uni from "../assets/logo/uni.png";

export default function Home() {
  return (
    <div className="HOME h-100vh">
      <div className="home-page">
        <div className="home-page-header">
          <h1 className="text-4xl l-spacing-2">Food Tasting Application</h1>
          <br />
          <p className="text-base l-spacing-0 f-w-6  ">
            Application to create, maintain and report food tasting in Foods ,
            Research and Development
          </p>
          <p className="text-base l-spacing-0">
            For more information please contact{" "}
            <b style={{ color: "blue" }}>mirasol.aquino@unilever.com</b>
          </p>
          <div className="input-box"></div>
        </div>
        <div className="home-page-img">
          <div className="home-logo">
            <img src={uni} alt="uni" />
          </div>
        </div>
      </div>
    </div>
  );
}