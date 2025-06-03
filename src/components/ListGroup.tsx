import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

interface Props{
    items:string[];
    heading:string;

}

function ListGroup({items,heading}: Props){
    

//Hook
const [selectedIndex,setSelectedIndex] = useState(-1)
//Error handler
const error_message = items.length === 0 && <p>No capitals found</p>

return (
<Fragment> 
<h1>{heading}</h1>
{error_message}
<ul className="list-group">
   {items.map((item,index) => 
   <li 
   key={item} 
   onClick={() => setSelectedIndex(index)} 
   className={selectedIndex === index ? "list-group-item active": "list-group-item"}>{item}
   </li>
)}
</ul>
</Fragment> 
);
}

export default ListGroup