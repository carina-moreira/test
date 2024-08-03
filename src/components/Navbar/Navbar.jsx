import "./Navbar.scss";
import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext.js";
import Button from "../Button/Button.jsx";
import Sun from "./../../assets/icon_sun.svg";
import Moon from "./../../assets/icon_moon.svg";
import EmailLight from "./../../assets/icon_email_lightmode.svg";
import EmailDark from "./../../assets/icon_email_darkmode.svg";
import DribbbleLight from "./../../assets/icon_dribbble_lightmode.svg";
import DribbbleDark from "./../../assets/icon_dribbble_darkmode.svg";
import LinkedInLight from "./../../assets/icon_linkedin_lightmode.svg";
import LinkedInDark from "./../../assets/icon_linkedin_darkmode.svg";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  //#region icons
  const emailIcon = theme === "light-mode" ? EmailLight : EmailDark;
  const dribbbleIcon = theme === "light-mode" ? DribbbleLight : DribbbleDark;
  const linkedinIcon = theme === "light-mode" ? LinkedInLight : LinkedInDark;
  const themeIcon = theme === "light-mode" ? Moon : Sun;
  const themeIconAlt = theme === "light-mode" ? "dakr mode" : "light mode";
  //#endregion icons

  const location = useLocation();

  useEffect(() => {
    /**
     * Updates the state of the component based on the current window size and
     * toggles the menu if the window size is not mobile and the menu is open.
     *
     * @return {void} This function does not return anything.
     */
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile && isMenuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, toggleMenu]);

  const renderMobileMenu = (
    <>
      <div
        className={`navbar__toggle ${isMenuOpen ? "cross" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`navbar__mobile`}>
        <div className="navbar__mobile--pages">
          <Button
            style="scaleText"
            size="small"
            label={"Home"}
            addClass={location.pathname === "/" ? "active" : ""}
            to="/"
            closeMenu={toggleMenu}
          />
          <Button
            style="scaleText"
            size="small"
            label={"About me"}
            addClass={location.pathname === "/aboutme" ? "active" : ""}
            to="/aboutme"
            closeMenu={toggleMenu}
          />
        </div>

        <div className="navbar__mobile--links">
          <Button
            style="icon"
            icon={emailIcon}
            iconAlt="Email"
            external
            to="mailto:carinaribeiromoreira@gmail.com"
          />
          <Button
            style="icon"
            icon={dribbbleIcon}
            iconAlt="Dribbble"
            external
            to="https://dribbble.com/cmoreira"
          />
          <Button
            style="icon"
            icon={linkedinIcon}
            iconAlt="LinkedIn"
            external
            to="https://www.linkedin.com/in/carina-moreira24"
          />
          <Button
            style="icon"
            icon={themeIcon}
            iconAlt={themeIconAlt}
            onClick={toggleTheme}
            addClass={"change-theme"}
          />
        </div>
      </div>
    </>
  );

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="navbar__left">
        <Button
          style="scaleText"
          label={"Home"}
          addClass={location.pathname === "/" ? "active" : ""}
          to="/"
        />
        <Button
          style="scaleText"
          label={"About me"}
          addClass={location.pathname === "/aboutme" ? "active" : ""}
          to="/aboutme"
        />
      </div>
      <div className="navbar__right">
        <Button
          style="icon"
          icon={emailIcon}
          iconAlt="Email"
          external
          to="mailto:carinaribeiromoreira@gmail.com"
        />
        <Button
          style="icon"
          icon={dribbbleIcon}
          iconAlt="Dribbble"
          external
          to="https://dribbble.com/cmoreira"
        />
        <Button
          style="icon"
          icon={linkedinIcon}
          iconAlt="LinkedIn"
          external
          to="https://www.linkedin.com/in/carina-moreira24"
        />
        <Button
          style="icon"
          icon={themeIcon}
          iconAlt={themeIconAlt}
          onClick={toggleTheme}
          addClass={"change-theme"}
        />
      </div>
      {isMobile && renderMobileMenu}
    </nav>
  );
};

export default Navbar;
