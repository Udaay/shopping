import React, {Component} from 'react';

import CollectionPreview from '../../component/collectionPreview/collectionPreview.component'
import SHOP_DATA from './shopepage.data'

export default class ShopePage extends Component{
  constructor(props){
    super(props);
    this.state ={
      collections : SHOP_DATA,
    }
  }

  render(){
    const { collections } = this.state;
    return(
      <div className= 'shopePage' >
        {
          collections.map(({id, ...otherCollectionProps})=>(
            <CollectionPreview key = {id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

