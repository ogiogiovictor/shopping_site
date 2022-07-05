import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import CollectionItem from '../collection-item/collection-item.component';
import './collection.styles.scss';

const Collection = ({title, items}) => (
    
        <div className="collection-preview">
            <h1 className='title'>{title.toUpperCase()}</h1> 
            <div className="preview">
                {
                    items.filter((item, index) => index < 4 ).map(({id, ...itemProps}) => (
                        <CollectionItem key={id} {...itemProps}/>
                    ))
                }
            </div>
        </div>
    
);

export default Collection;