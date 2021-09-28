import React, { useState } from 'react';

function Photo() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(text);
    let textToArray=text.split(' ');
    let textForLink=textToArray[0];
    
    for(let i = 1; i < textToArray.length; i++){
      console.log(`textToArray is ${textToArray}`);
      textForLink = textForLink + '%20' + textToArray[i];
    }

    // let fullUrl = "https://assets.imgix.net/examples/butterfly.jpg?txt=Check%20out%20my%20sweet%20wings&blend=4400bb&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50"
    let baseUrl = "https://assets.imgix.net/examples/butterfly.jpg?txt=";
    let endPartOfURL = "&blend=4400bb&w=640&txtclr=fff&txtalign=center%2Cmiddle&txtsize=48&bm=normal&balph=50";
    window.open(baseUrl + textForLink + endPartOfURL);
  }

  return(
    <div>
      <label>
      Text To Display
      {text}
      <textarea value={text} onChange={e => setText(e.target.value)} />
      </label>
      
      <input type="submit" value="Submit" onClick={handleSubmit} />

    </div>
  )
}

export default Photo;
