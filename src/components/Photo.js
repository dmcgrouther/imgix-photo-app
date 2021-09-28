import React, { useState } from 'react';
import Color from './Color';
import './Photo.css';

function Photo() {
  const [text, setText] = useState("Enter text here to put on picture.");
  const [color, setColor] = useState("000000");

  const handleColorChange = (newColor) => {
    setColor(newColor)
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
    let endPartOfURL = "bb&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50";
    window.open(baseUrl + textForLink + '&blend=' + hexColor + endPartOfURL);
  }

  return(
    <div>
      <h1>Photo Booth</h1>
      <br />
      <div className='text-part'>
        <h2>Enter Text Below</h2>
        <textarea value={text} onChange={e => setText(e.target.value)} />
        {/* <input type="submit" value="Submit" onClick={handleSubmit} /> */}
      </div>
      <div className='color-part'>
        <h2>Select your color below</h2>
        <Color value={color} onChange={handleColorChange} />
      </div>
      <button type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Photo;
