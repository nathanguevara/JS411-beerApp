import React, { useState } from "react";

// function likeButton(){
//   alert('You clicked like.')
// }

export function Like() {
  const [isClick, setClick] = useState(false);

  const handleClick = () => {
    console.log("Clicked");
    setClick(!isClick);
  };

  return (
    <div>
      <button style={{
          backgroundColor: isClick ? 'salmon' : '',
          color: isClick ? 'white' : '',
        }} onClick={handleClick}>
        {isClick === true ? "Liked!" : "Click to like"}
      </button>
    </div>
  );
}

export default Like;
