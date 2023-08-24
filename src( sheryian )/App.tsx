// // import Message from './Message';
// //here Message component is imported from Message.tsx file. and to that we used './' it helps to get access of the files stored in the sane folder.

// import ListGroup from "./components/ListGroup";
// function App() {
//   let items = ["Kolkata", "New York", "Delhi", "Pune", "Bangalore"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   }; //because of this if we select an item from the lsit it will be consoled

//   //we should always close tag of react component or it will give us a compilation error.

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//       {/* <ListGroup /> */}
//     </div>
//   );
//   // return <div><Message/></div>;
// }

// export default App;

// //we can see in the terminal hmr updat that is hot module replacement so vite under the hood always works whatever changes we make it will automatically changes the browser.
// //as a result you will be able to see Hello world in the created local host

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Buttons from "./components/Buttons";

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>
//           Hello <b>World</b>
//         </Alert>
//       )}
//       <Buttons color="primary" onClick={() => setAlertVisibility(true)}>
//         My Button
//       </Buttons>
//     </div>
//   );
// }

// export default App;

// import Header from "./components/Header";
// import React, { useState } from "react";

// function App() {
//   const [user, setuser] = useState("Rahul");
//   const [editor, seteditor] = useState("Rohit");
//   return (
//     <div>
//       <Header user={user} edit={editor} />
//       {user}
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import styles from "./App.css";
// // import Link from "next/link";

// const App = () => {
//   return (
//     <>
//       <div>
//         <a href="/About">About</a>
//         <a href="Product">Product</a>
//         <a href="ConatctUs">Contact Us</a>
//         {/* <Link href="/About">About</Link> */}
//       </div>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import axios from "axios";
import styles from "./App.css";

const App = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(Images);
    } catch {
      console.error("Error fetching images");
    }
  };
  return (
    <>
      <div>
        <button onClick={getImages} className="styles.buttons">
          Get Images
        </button>
        <div>
          {Images.map((elem, i, hasMargin) => {
            return (
              <img
                key={i}
                src={elem.download_url}
                width={200}
                height={200}
                style={hasMargin ? { margin: "0.8rem" } : {}}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
