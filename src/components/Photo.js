import React, { useState } from 'react';

function Photo() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://assets.imgix.net/examples/butterfly.jpg");
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
