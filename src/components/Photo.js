import React, { useState } from 'react';
import Color from './Color';
import './Photo.css';

function Photo() {
  const [text, setText] = useState("Enter text here.");
  const [color, setColor] = useState("000000");
  const [amountOfColor, setAmountOfColor] = useState(50);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  }

  const handleAmountOfColor = (event) => {
    setAmountOfColor(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let textToArray=text.split(' ');
    let textForLink=textToArray[0];
    
    for(let i = 1; i < textToArray.length; i++){
      console.log(`textToArray is ${textToArray}`);
      textForLink = textForLink + '%20' + textToArray[i];
    }

    let hexColor;
    if(color[0] === '#'){
      hexColor = color.substring(1);
    } else {
      hexColor = color;
    }

    // let fullUrl = "https://assets.imgix.net/examples/butterfly.jpg?txt=Check%20out%20my%20sweet%20wings&blend=4400bb&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50"
    let baseUrl = "https://assets.imgix.net/examples/butterfly.jpg?txt=";
    let textDetails = "bb&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=";
    window.open(baseUrl + textForLink + '&blend=' + hexColor + textDetails + amountOfColor);
  }

  return(
    <div>
      <h1>Photo Booth</h1>
      <br />
      <div className='text-part'>
        <h2>Enter text below</h2>
        <textarea value={text} onChange={e => setText(e.target.value)} maxLength="30" />
        {/* <input type="submit" value="Submit" onClick={handleSubmit} /> */}
      </div>
      <div className='color-part'>
        <h2>Select your color below</h2>
        <Color value={color} onChange={handleColorChange} />
      </div>
      <div className='amount-of-color-part'>
        <h2>Enter how much color to add below (0 to 100)</h2>
        <input value={amountOfColor} onChange={handleAmountOfColor} />
      </div>
      <button type="submit" value="Submit" onClick={handleSubmit}>Take the Photo!</button>
    </div>
  )
}

export default Photo;
