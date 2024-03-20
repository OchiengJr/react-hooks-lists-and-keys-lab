import React from "react";

function Home({ color = "black", username, city }) {
  // Fallback color in case 'color' prop is not provided or invalid
  const textColor = color || "black";

  return (
    <div id="home">
      <h1 style={{ color: textColor }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
