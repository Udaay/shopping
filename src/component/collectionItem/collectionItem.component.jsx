import React from 'react'
import './collectionItem.styles.scss'

const CollectionItem = ({name, imageUrl, price})=>{
  return(
    <div className= 'collectionItem'>
      <div
      style ={{
        backgroundImage: `url(${imageUrl})`
      }}
      className = 'image'
      ></div>
    <div className = 'itemFooter' >
      <span className='name' > {name} </span>
      <span className = 'price'> {`$${price}`} </span>
    </div>
    </div>
  )
}

export default CollectionItem;