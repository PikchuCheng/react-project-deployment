import React from 'react'

function Theme() {
  return (
    <div>
 <div className="settings-section">
        <h2>Preferred Theme</h2>
        <div className="options-container color">
        <div className="options light">
            {theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
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
    </div>
  )
}

export default Theme
