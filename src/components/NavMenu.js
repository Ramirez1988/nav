import React from "react";

function NavMenu(props) {
  return (
    <ul className="dropMenu">    
      {props.menu.map(el => (
        <li className="dropMenuItems">
          {el.title}
          {!el.dropdown ? null : (
            <ul className="dropdownList">
              {el.dropdown.map(el => (
                <li> {el}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavMenu;
