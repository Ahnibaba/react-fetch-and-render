import React from 'react'

const ListItem = ({ item }) => {
  return (
    <li key={item.id}>
      {JSON.stringify({item})}
    </li>
  )
}

export default ListItem 