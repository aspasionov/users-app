import React from 'react';
import "./styles.sass"

const Card = ({ user, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card__img">
        <img src={user.photo} alt="" />
      </div>
      <div className='card__text' styles="margin-bottom: 20px">{user.name}</div>
      <div className='card__text'>{user.position}</div>
      <div className='card__text'>{user.email}</div>
      <div className='card__text'>{user.phone}</div>
    </div>
  );
}

export default Card;