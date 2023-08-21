// import { Fragment } from "react";
// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = ["Kolkata", "New York", "Delhi", "Pune", "Bangalore"];
  //   items = [];
  //   let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const getMessage = () => {
    // return items.length == 0 ? <p>Item not found</p> : null;
    return items.length == 0 && <p>Item not found</p>;
  };
  //   if (items.length == 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );
  //event Handler
  //   const handleClick = (event: MouseEvent) => console.log(event);
  return (
    // <Fragment>
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {items.map((item, index) => (
          <li
            // className="list-group-item"
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            // onClick={()=>console.log(item)}
            // onClick={(event) => console.log(event)}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}

export default ListGroup;
