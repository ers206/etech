
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

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          {/* need to add log  */}
          <span role="img" aria-label="camera"> </span> E TECHNOLLOGIES LLC
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
              Contact
            </span>
          </li>  
        </ul>
      </nav>
    </header>
  );
}

export default Nav;