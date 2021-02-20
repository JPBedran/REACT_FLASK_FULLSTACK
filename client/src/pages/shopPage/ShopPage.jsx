import React,{ Component } from 'react';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'
import SHOP_DATA from './shopData'

class ShopPage extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      collections: SHOP_DATA
    }
  }
  render(){
    return (
      <div className="">
        {this.state.collections.map(({id,...collectionProps}) => 
          <PreviewCollection className="collection" key={id} {...collectionProps}/>
          )}
      </div>
    )
  }
}
export default ShopPage;