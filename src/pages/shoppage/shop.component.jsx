import React from 'react';
import SHOP_DATA from './shop.data';
import Previewshoopitems from '../../components/preview-shopitems/preview-shopitems.component';

class Shoppage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Collections: SHOP_DATA
        }
    }

    render() {
        const {Collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    Collections.map(({id, ...othercollectionprops}) => (
                        <Previewshoopitems key={id} {...othercollectionprops}/>
                    ))
                }
            </div>
        );
    }
        
};

export default Shoppage;