import React from 'react'


const Cell = ({ value }) => {
  return (
   
    <td>{`${value.myKey}:` + JSON.stringify(value.myValue)}</td> // I am concatenating here
  )
}

export default Cell