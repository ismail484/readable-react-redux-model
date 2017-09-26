import React from 'react'

export const Edit = (props) => {
  return(
    <div
      onClick={() => props.onClickEdit(props.id)} 
      className="Delete">
      edit
    </div>
  )
}