import React from 'react'

function CourItem() {
    const idItem = window.location.href
  return (
    <div>
        <h2>This is info Course {idItem.slice(27)} </h2>
    </div>
  )
}

export default CourItem
