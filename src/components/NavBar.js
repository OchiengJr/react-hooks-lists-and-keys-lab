import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aTag = links.map((hasTag) =>{
    return <a href={`#${hasTag}`} key={hasTag}>{hasTag}</a>
  })
  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {aTag}
    </nav>
  );
}

export default NavBar;
