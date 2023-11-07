import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";


export default function Setting() {

  const [settings, setSettings] = useState({
    "--background-color": "#fff",
    "--background-light": "rgb(223, 216, 216)",
    "--primary-color": "rgb(255, 99, 71)",
    "--box-shadow": "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    "--text-color": "#0A0A0A",
    "--text-light": "rgb(255, 105, 180)",
    "--font-family": "Georgia, serif",
    "--font-size": "16px",
    "--animation-speed": 1,
  });

 

  const [theme, setTheme] = useState("light");
  const themes = [
    {
      "--background": "#fff",
      "--box-shadow": "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      "--text-color": "#0A0A0A",
    
    },
    {
      "--background": "linear-gradient(to top right, #13547a, #80d0c7)",
      "--box-shadow": " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      "--text-color": "#fff",
   
    },
   {
      "--background": "linear-gradient(to top, #09203f, #537895)",
      "--box-shadow":  " 0 6px 6px -4px rgb(173, 216, 230)",
      "--text-color": "#fff",
      
    },
    {
      "--background": "linear-gradient(to bottom right, #85CBCC, #F9E2AE, #fbc78f)",
      "--box-shadow": " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      "--text-color": "#0A0A0A",
      
    },
    {
      "--background": "linear-gradient(to bottom right, #ff758c, #ff7eb3)",
      "--box-shadow": " rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      "--text-color": "#fff",
    }
  ];

function changeTheme(index) {
  const selectedTheme = themes[index];
  setTheme(index)
  let updatedSettings = { ...settings }
  for (let key in selectedTheme) {
    updatedSettings[key] = selectedTheme[key];
  }
  console.log(selectedTheme);
  setSettings(updatedSettings);
  }
   
  const [niceColor, setNiceColor] = useState(0);
  const niceColors = [
    "rgb(255, 99, 71)", // Tomato
    "rgb(255, 140, 0)", // DarkOrange
    "rgb(255, 215, 0)", // Gold
    "rgb(0, 128, 0)", // Green
    "rgb(255, 255, 255)", // Navy
    "rgb(70, 130, 180)", // SteelBlue
    "rgb(255, 69, 0)", // Red-Orange
    "rgb(128, 0, 128)", // Purple
    "rgb(255, 20, 147)", // DeepPink
    "rgb(0, 139, 139)", // DarkCyan
  ];

  function changeColor(index) {
    const _color = niceColors[index];
    let _settings = { ...settings };
    _settings['--primary-color'] = _color;
    setSettings(_settings);
    setNiceColor(index);
  }

  const [fontFamily, setFontFamily] = useState(0);
  const fontFamilies = [
    "Arial, sans-serif",
    "Times New Roman, serif",
    "Verdana, sans-serif",
    "Helvetica, sans-serif",
    "Georgia, serif",
    "Courier New, monospace",
  ];

  

  function changeFontFamily(index) {
    const _family = fontFamilies[index];
    setFontFamily(_family);
    let _settings = { ...settings };
    _settings['--font-family'] = _family;
    setSettings(_settings);
    console.log(_family);
  }



  const [fontSize, setFontSize] = useState(0);
  const fontSizes = [
    {
      title: "small",
      value: "16px",
    },
    {
      title: "medium",
      value: "20px",
    },
    {
      title: "large",
      value: "24px",
    },
  ];

  function changeFontSize(index){
    const _size = fontSizes[index];
    let _settings = { ...settings };
    _settings['--font-size'] = _size.value;
    setSettings(_settings);
    setFontSize(index);
  }

  // const [animationSpeed, setAnimationSpeed] = "";
  // const animationSpeeds = [
  //   {
  //     title: "Slow",
  //     value: 2,
  //   },
  //   {
  //     title: "Medium",
  //     value: 1,
  //   },
  //   {
  //     title: "Fast",
  //     value: 0.5,
  //   },
  // ];

  // function changeAnimationSpeed(index) {
  //   const _speed = animationSpeeds[index];
  //   let _settings = { ...settings };
  //   _settings['--animation-speed'] = _speed.value;
  //   setSettings(_settings);
  //   setAnimationSpeed(index);
  // }

  useEffect(() => {
    console.log('settings update', settings);
    const root = document.documentElement;
    for(let key in settings) {
      root.style.setProperty(key, settings[key])
    }
  
  }, [settings]);

  return (
    <div className="setting">
      <h1 className="h2-settings">Setting Page</h1>

      <div className="settings-section">
        <h2 className="h2-settings">Preferred Theme</h2>
        <div className="options-container color">
          <div className="options light" onClick={() => changeTheme(0)}>
            {theme === 0 && (
              <div className="check ">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="options green" onClick={() => changeTheme(1)}>
            {theme === 1 && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="options blu" onClick={() => changeTheme(2)}>
            {theme === 2 && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="options soft" onClick={() => changeTheme(3)}>
            {theme === 3 && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="options pinky" onClick={() => changeTheme(4)}>
            {theme === 4 && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2 className="h2-settings">Nice Color</h2>
        <div className="options-container color">
          {niceColors.map((color, index) => (
            <div
              key={index}
              className="options"
              style={{ backgroundColor: color }}
              onClick={() => changeColor(index)}
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
        <h2 className="h2-settings">Font Family</h2>
        <div className="options-container color">
          {fontFamilies.map((font, index) => (
            <button
              key={index}
              onClick={() => changeFontFamily(index)}
            >
              <span>{font}</span>
              {font === fontFamily && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
     

      <div className="settings-section">
        <h2 className="h2-settings">Font Size</h2>
        <div className="options-container color">
          {fontSizes.map((size, index) => (
            <button key={index} onClick={() => changeFontSize(index)}>
              <span>{size.title}</span>
              {fontSize === index && <FontAwesomeIcon icon={faCheck} />}
            </button>
          ))}
        </div>
      </div>

      {/* <div className="settings-section">
        <h2>Animation Speed</h2>
        <div className="options-container color">
          {animationSpeeds.map((speed, index) => (
            <button key={index} onClick={() => changeAnimationSpeed(index)}>
              <span>{speed.title}</span>
              {animationSpeed === index && <FontAwesomeIcon icon={faCheck} />}
            </button>
          ))}
        </div>
      </div> */}
    </div>
  );
}
