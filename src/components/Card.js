import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{props.name}</div>
      </div>
    </div>
  )
}

export default Card
