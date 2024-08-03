import "./Banner.scss";
import React from "react";
import Me from "./../../assets/carinamoreira.jpeg";
import Button from "./../Button/Button.jsx";

/**
 * Renders the Banner component which displays a banner with a photo of the developer
 * a welcome message, a small description and two buttons.
 *
 * @return {JSX.Element} The rendered Banner component.
 */
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__left">
        {Me && (
          <img
            src={Me}
            alt="Carina Moreira"
            className="banner__left--img"
          ></img>
        )}
      </div>
      <div className="banner__right">
        <div className="banner__right__txt">
          <p className="banner__right__txt--subtitle">Hello there!</p>
          <h1 className="banner__right__txt--title">
            As a{" "}
            <span className="banner__right__txt--title--highlight">
              front-end developer
            </span>{" "}
            with a design background, I aim to leverage my skills and experience
            to excel in web development{" "}
          </h1>
          <span className="banner__right__txt--descr">
            My understanding of both worlds allows me to seamlessly translate
            design concepts into outstanding frontend solutions.
          </span>
        </div>
        <div className="banner__right__links">
          <Button
            label="Get in touch!"
            external
            to="mailto:carinaribeiromoreira@gmail.com"
          ></Button>
          <Button
            label="Check my LinkedIn"
            external
            to="https://www.linkedin.com/in/carina-moreira24"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
