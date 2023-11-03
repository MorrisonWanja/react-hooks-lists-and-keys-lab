import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
  <a>home</a>
  <a>about</a>
  <a>projects</a>
  
  </nav>;
}

export default NavBar;
