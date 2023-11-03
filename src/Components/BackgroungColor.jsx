import { useState } from 'react';

function BackgroundColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeToRandomColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h2>Background Color Changer</h2>
      <input
        type="color"
        value={backgroundColor}
        onChange={handleColorChange}
      />
      <button onClick={changeToRandomColor}>Random Color</button>
      <div>
        <p>This is your dynamic background color!</p>
      </div>
    </div>
  );
}

export default BackgroundColorChanger;


