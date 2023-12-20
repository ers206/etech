// import React, { useState } from 'react';
// import Nav from './components/Nav';
// import About from './components/About';
// import Gallery from './components/Gallery';

// function App() {
//   const [categories] = useState([
//     {
//       name: 'commercial',
//       description: 'Photos of grocery stores, food trucks, and other commercial projects',
//     },
//     { name: 'portraits', description: 'Portraits of people in my life' },
//     { name: 'food', description: 'Delicious delicacies' },
//     { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
//   ]); 

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//       ></Nav>
//       <main>
//         {/* wont work with contactform not commented out  */}
//         {/* <ContactForm></ContactForm>  */}
//         <Gallery currentCategory={currentCategory}></Gallery>
//         <About></About>
//       </main>
//     </div>
//   );
// }

// export default App;

// ==================================

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
// not sure I want contact form
import ContactForm from './components/Contact'; 

function App() {
  // Id like the about section to be above the commercial/changed to projects section when page loads, maybe eve not have projects on this page
  const [categories] = useState([ 
    {
      // this will be projects*******************change to projects and change in photolist index.js 
      name: 'projects',
      description: 'Some of our completed projects',
    },
    // this will be pictures/ picture gallery
    { name: 'photos', description: 'Portraits of people in my life' },
    // not sure I need these below or change them to something *******ads/ show ads that I have made on FB or Google
    { name: 'ads', description: 'Delicious delicacies' },
    // { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }, 
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      {/* this is where ' was in upper left corner of page */}
      {/* I dont need all the current categories in nav. I want a photo gallery, a projects section, and maybe a section showing adds Ive made */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          // ******** not sure I want contactform
            <ContactForm></ContactForm> 
          )}

      </main>
    </div>
  );
}
// class App extends Component {
//   render() {
//       const myStyle = {
//           backgroundImage:
//               "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
//           height: "100vh",
//           marginTop: "-70px",
//           fontSize: "50px",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//       };
//       return (
//           <div style={myStyle}>
//               <h1> geeksforgeeks </h1>
//           </div>
//       );
//   }
// }



export default App;
// this is from the module "Let's add our own component to the App component. First, get rid of the starter JSX in App() and replace it with an empty <div>, as shown in the following example code:"

// return (
//   <div>
//   </div>
// );

// export default App;

// json file from class 
// "devDependencies": {
//   "@testing-library/jest-dom": "^5.8.0",
//   "@testing-library/react": "^9.5.0",
//   "gh-pages": "^3.0.0"
// }
// from class 
// npm i @testing-library/react @testing-library/jest-dom --save-dev
