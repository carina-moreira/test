import "./Home.scss";
import Blob from "./../../components/Blob/Blob.jsx";
import Button from "../../components/Button/Button.jsx";
import CV_CarinaMoreira from "./../../assets/cv_carinamoreira.pdf";

/**
 * Renders the Home component which displays a home page with a blob animation,
 * an introduction text and a button to check the CV.
 *
 * @return {JSX.Element} The rendered Home component.
 */
const Home = () => {
  return (
    <div className="home">
      <Blob></Blob>
      <div className="home__intro">
        <div className="home__intro__text">
          <p className="home__intro__text--subtitle">Hello there!</p>
          <h1 className="home__intro__text--title">
            I’m a front-end developer <br></br> with a keen eye for design
          </h1>
        </div>
        <Button
          style="primaryFull"
          label="Check my CV"
          external
          to={CV_CarinaMoreira}
        />
      </div>
    </div>
  );
};

export default Home;
