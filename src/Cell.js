import React from 'react'
import SingleData from './SingleData'

const Cell = ({ cellData, key}) => {
  return (
    <td key={key}>
        {typeof cellData === 'object' ? Object.entries(cellData).map(([key, value]) => {
            return(
                <SingleData key={key} SingleData={JSON.stringify(value)} />
            )
        }) : cellData}
    </td>
  )
}

export default Cell