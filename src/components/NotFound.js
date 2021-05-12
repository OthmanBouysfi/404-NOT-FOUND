import React from "react";
import Scarecrow from "../img/scarecrow.png";

export default () => {
  return (
    <>
      <header>
        <span className="title">404 not found</span>
      </header>
      <main>
        <img src={Scarecrow} alt="scarecrow" className="scarecrow"></img>
        <span className="title-left">I have bad news for you</span>
        <p className="paragraph-left">
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
        <button className="button-left">back to homepage</button>
      </main>
      <footer>
        <p className="footer">https://github.com/OthmanBouysfi</p>
      </footer>
    </>
  );
};
