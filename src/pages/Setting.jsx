import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Setting() {
  const [theme, setTheme] = useState("green");
  const [niceColor, setNiceColor] = useState(0);
  const [fontSize, setFontSize] = useState(0);
  const [animationSpeed, setAnimationSpeed] = "";

  const niceColors = [
    "rgb(255, 99, 71)", // Tomato
    "rgb(255, 140, 0)", // DarkOrange
    "rgb(255, 215, 0)", // Gold
    "rgb(0, 128, 0)", // Green
    "rgb(0, 0, 128)", // Navy
    "rgb(70, 130, 180)", // SteelBlue
    "rgb(255, 69, 0)", // Red-Orange
    "rgb(128, 0, 128)", // Purple
    "rgb(255, 20, 147)", // DeepPink
    "rgb(0, 139, 139)", // DarkCyan
  ];

  const fontSizes = [
    {
      title: "small",
      value: "12px",
    },
    {
      title: "medium",
      value: "16px",
    },
    {
      title: "large",
      value: "20px",
    },
  ];

  const animationSpeeds = [
    {
      title: "Slow",
      value: 2,
    },
    {
      title: "Medium",
      value: 1,
    },
    {
      title: "Fast",
      value: 0.5,
    },
  ];

  return (
    <div className="setting">
      <h2>Setting Page</h2>

      <div className="settings-section">
        <h2>Preferred Theme</h2>
        <div className="options-container">
          <div className="options green">
            {theme === "green" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="options blu">
            {theme === "blue" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="options soft">
            {theme === "soft" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="options pinky">
            {theme === "pinky" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2>Nice Color</h2>
        <div className="options-container color">
          {niceColors.map((color, index) => (
            <div
              key={index}
              className="options"
              style={{ backgroundColor: color }}
            >
              {niceColor === index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="settings-section">
        <h2>Font Size</h2>
        <div className="options-container color">
          {fontSizes.map((size, index) => (
            <button key={index}>
              <span>{size.title}</span>
              {fontSize === index && <FontAwesomeIcon icon={faCheck} />}
            </button>
          ))}
        </div>
      </div>

      <div className="settings-section">
        <h2>Animation Speed</h2>
        <div className="options-container color">
          {animationSpeeds.map((speed, index) => (
            <button key={index}>
              <span>{speed.title}</span>
              {animationSpeed === index && <FontAwesomeIcon icon={faCheck} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
