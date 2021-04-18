import React from 'react'

import CollectionItem from '../collectionItem/collectionItem.component'
import './collectionPreview.styles.scss'

const CollectionPreview = ({title, items})=>{
  return(
    <div className='collectionPreview' >
        <h1 className = 'title' >{title.toUpperCase()}</h1>
        <div className= 'preview' >
        {items.filter((_item,ind)=> ind<4)
        .map(({id, ...otherPropsItem})=>(
          <CollectionItem key = {id} {...otherPropsItem} />
        ))}
        </div>
    </div>
  )
}

export default CollectionPreview;