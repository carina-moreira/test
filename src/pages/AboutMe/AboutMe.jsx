import Banner from "../../components/Banner/Banner";
import Detail from "../../components/Detail/Detail";
import "./AboutMe.scss";
import Html from "./../../assets/icon_html.svg";
import Css from "./../../assets/icon_css.svg";
import Scss from "./../../assets/icon_scss.svg";
import Javascript from "./../../assets/icon_javascript.svg";
import Typescript from "./../../assets/icon_typescript.svg";
import Angular from "./../../assets/icon_angular.svg";
import React from "./../../assets/icon_react.svg";
import Duke from "./../../assets/sketch_duke.gif";

/**
 * Renders the AboutMe component, which displays information about the developers's
 * technology stack and interests. The component consists of a banner, a
 * Detail component for technology stack, and a Detail component for interests.
 *
 * @return {JSX.Element} The AboutMe component.
 */
const AboutMe = () => {
  //#region Detail Props
  const techText = (
    <span>
      My passion is in the web. I have solid fundamentals in <b>HTML, CSS</b>{" "}
      and have made Javascript my main focus for the past 4 years. I like
      building challenging interfaces mainly with <b>React</b>.
    </span>
  );
  const stack = (
    <div className="stack">
      <img src={Html} alt="HTML5" className="stack__icon" />
      <img src={Css} alt="Css" className="stack__icon" />
      <img src={Scss} alt="Css" className="stack__icon" />
      <img src={Javascript} alt="Javascript" className="stack__icon" />
      <img src={Typescript} alt="Typescript" className="stack__icon" />
      <img src={Angular} alt="Angular" className="stack__icon" />
      <img src={React} alt="React" className="stack__icon" />
    </div>
  );

  const interestsText = (
    <>
      <span>
        When I'm not crafting engaging digital experiences, you'll likely find
        me immersed in a book, enjoying a new album from my favorite artists, or
        trying my hand at sketching. Each activity provides a welcome escape and
        creative outlet in my life. <br></br>You can check all my illustrations{" "}
        <a
          href="https://dribbble.com/cmoreira"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </span>
    </>
  );
  const sketchs = (
    <div className="sketch">
      <img src={Duke} alt="Duke" className="sketch__gif" />
    </div>
  );
  //#endregion Detail Props

  return (
    <div className="aboutme">
      <Banner></Banner>
      <Detail tagLabel="Technology" text={techText} media={stack}></Detail>
      <Detail
        tagLabel="My interests"
        text={interestsText}
        media={sketchs}
      ></Detail>
    </div>
  );
};

export default AboutMe;
