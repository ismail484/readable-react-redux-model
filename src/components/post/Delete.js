import React from 'react'

export const Delete = (props) => {
  return(
    <div
      onClick={() => props.onClickDelete(props.id)} 
      className="Delete">
      delete
    </div>
  )
}