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

import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <b>World</b>
        </Alert>
      )}
      <Buttons color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Buttons>
    </div>
  );
}

export default App;
