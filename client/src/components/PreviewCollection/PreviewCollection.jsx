import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem'
import './PreviewCollection.scss';

const PreviewCollection = ({title, items}) => (
  <div className="collection-preview">
    <div className="title">
      {title}
    </div>
    <div className="preview">
      {items
      .filter((item, i)=>i<4)
      .map(({id, ...itemsProps}) => 
          <CollectionItem key={id} {...itemsProps}/>
        )}
    </div>
  </div>
)
export default PreviewCollection;