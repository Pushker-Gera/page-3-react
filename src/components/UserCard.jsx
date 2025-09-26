import React from 'react'
import Icon_box from './icon_box'

const UserCard = (props) => {
  return (
    <div className="card">
      <div className="relative">
        <img className="w-100" src={props.img} alt={props.img_name} />
        <Icon_box />
        <h2 className="name">{props.name}</h2>
        <p className="designation">{props.designation}</p>
      </div>
    </div>
  )
}
export default UserCard