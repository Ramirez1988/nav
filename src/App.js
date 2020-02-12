import React from "react";
import "./App.css";
import NavMenu from "./components/NavMenu";

const menu = [
  { title: "Home", link: "#" },
  {
    title: "Services",
    link: "#",
    dropdown: ["For entrepreneurs", "For students", "For hobbyists"]
  },
  { title: "Contact", link: "#" }
]

function App() {
  
  return (
    <NavMenu menu={menu} />
  )
}

export default App;
