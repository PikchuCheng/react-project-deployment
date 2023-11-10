import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [aboutUsVisible, setAboutUsVisible] = useState(false);

  const toggleAboutUs = () => {
    setAboutUsVisible(!aboutUsVisible);
  };

  return (
    <div className="footer">
      <div className="footer-section">
        <p className="title">UseRecipes</p>

        <p>
          UseRecipes is a place where you can get delicious recipes all over the
          world! With UseRecipes, you&apos;ll have the world&apos;s most delectable dishes
          at your fingertips, ready to be prepared and savored. Join us on this
          gastronomic adventure, and let your taste buds travel the world, one
          delightful recipe at a time.
        </p>
      </div>

      <div className="footer-section">
        <p className="title">Contact</p>
        <p>userecipes_foodieclub@gmail.com</p>
        <p>+49 030 17171717</p>
      </div>

      <div className="footer-section">
        <p className="title">Social Media</p>

        <p>
          {" "}
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <Link to="/404">Facebook</Link>{" "}
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          <Link to="/404">Instagram</Link>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          <Link to="/404">Twitter</Link>
        </p>
      </div>

      <div className="footer-section"></div>

      <div className="footer-section">
        <p>An der Friedrichshohe 1</p>
        <p> Kelsterbach</p>
        <p>65451 Hesse ,Germany</p>
        <p> Copyright © 2023 UseRecipes | All right Reserved |</p>
      </div>

      <div className="footer-section">
        <p>
          | <Link to="/terms">Privacy Policy </Link>|
          <button className="footer-button" onClick={toggleAboutUs}>
            About us |
          </button>
        </p>

        {aboutUsVisible && (
          <div className="about-us-box">
            <p className="title">Our Team</p>

            <div className="profile-box">
              <div className="profile-container">
                <img className="img-footer" src="../images/gabriella.png" />
                <p>Gabriella</p>
                <p>Developer</p>
              </div>
              <div className="profile-container">
                <img className="img-footer" src="../images/rachel.png" />
                <p>Pikchu</p>
                <p>Developer</p>
              </div>

              <div className="profile-container">
                <img className="img-footer" src="../images/esther.png" />
                <p>Esther</p>
                <p>Developer</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
