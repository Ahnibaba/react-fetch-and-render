import React from 'react'
import Cell from './Cell'
import { v4 as uuidv4 } from 'uuid';


const Row = ({ item }) => {
   
  const func = (params, arr = []) => {
    Object.entries(params).map(([key, value]) => {
        if(typeof value !== "object"){
           
         return  arr.push({ id: uuidv4(), myKey: key, myValue: value });
        }
        return func(value, arr);
        
    })
    
    return arr
    
  }

  return (
    <tr >
      {func(item).map((value) =>(

        <Cell key={value.id} value={value}/>
        
      ))}
    </tr>
  )
}

export default Row


















































// import React from 'react';
// import Cell from './Cell';

// const Row = ({ item }) => {
//   return (
//     <tr>
//        {Object.entries(item).map(([key, value]) => {
//             // Check if value is an object
//             if (typeof value === 'object' && value !== null) {
//                 // If value is an object, iterate over its keys and render each element
//                 return Object.values(value).map((element, index) => {
//                     // Check if the element is also an object
//                     if (typeof element === 'object' && element !== null) {
//                         // If element is an object, iterate over its values and render each one
//                         return Object.values(element).map((nestedElement, nestedIndex) => (
//                             <Cell key={key + index + nestedIndex} cellData={JSON.stringify(nestedElement)} />
//                         ));
//                     } else {
//                         // If element is not an object, render it directly
//                         return <Cell key={key + index} cellData={JSON.stringify(element)} />;
//                     }
//                 });
//             } else {
//                 // If value is not an object, render it directly
//                 return <Cell key={key} cellData={JSON.stringify(value)} />;
//             }
//        })}
//     </tr>
//   );
// };

// export default Row;
