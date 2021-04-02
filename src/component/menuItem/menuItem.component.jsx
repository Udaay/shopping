import React from "react";
import './menuItem.styles.scss'

const MenuItem = (props) => {
  const { title, size, imageUrl } = props.item;
  return (
    <div className={`${size} menu-item`}>
      <div 
      style ={{
        backgroundImage: `url(${imageUrl})`
      }}
      className='background-img'></div>
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subTitle"> SHOP NOW </span>
      </div>
    </div>
  );
};

export default MenuItem;
