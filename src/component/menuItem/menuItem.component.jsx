import React from "react";
import './menuItem.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = (props) => {
  const { item : {title, size, imageUrl, linkUrl}, match, history } = props;
  console.log(props);
  // console.log(match.path);
  return (
    <div className={`${size} menu-item`} onClick = { () => { history.push(`${match.url}${linkUrl}`) }}>
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

export default withRouter(MenuItem);
