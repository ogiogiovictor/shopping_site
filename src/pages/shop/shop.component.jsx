import React from 'react';
import SHOP_DATA from './shop.data.js'; 

import Collection from '../../components/collection/collection.component.jsx';

class ShopPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collection: SHOP_DATA
        }
    }


    render () {
        const { collection } = this.state;
        return (<div class="shop-page">
            {
                collection.map(({id, ...otherCollectionProps}) => (
                    <Collection key={id} {...otherCollectionProps }/>
                ))
            }
        </div>)
    }
}

export default ShopPage;