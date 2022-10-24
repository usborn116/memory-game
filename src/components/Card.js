import React from 'react'

export default function Card(props) {
  const imageUrl = props.image.url
  return (
    <div className="card" >
      <img src={imageUrl} alt={props.image.name} ></img>
      <p>{props.image.name}</p>
    </div>
  )
}