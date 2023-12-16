
// =============================================================
import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;


  const handleClick = (item) => {
    setContactSelected(!contactSelected)
    return item;
  };
// i dont need all the categories on top. I need about us, recent projects(with links), gallery of images
// why only about us, contact and tiltle on this page
  return (
    <header className="flex-row px-1">
      {/* need ti get logo to be smaller and next to Etech font when I changed the favicon logo this stopped working moved it to public still not working*/}
      <img id="eLogo" src="etechLogo.png"
           alt=""></img>
      <h2>
        <a data-testid="link" href="/" id="title1">
          {/* need to add logo  */}
          {/* <span ></span>  */}
          <span  role="img" aria-label="camera"> </span>E TECHNOLOGIES LLC
        </a>
      </h2>
      
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Us
            </a>
          </li>

          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
                    <li className={"mx-2"}>
            <span onClick={() => {
                handleClick()
            }}>
                Contact Us
            </span>
          </li>  
        </ul>
      </nav>
      
    </header>
  );
}

export default Nav;