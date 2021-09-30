import React from 'react';
import Shopitemcard from '../../components/shopitem-card/shopitem-card.component';
import './preview-shopitems.style.scss'

const Previewshoopitems = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, index) => index <4).map(({id, ...otheritemprops}) => (
                    <Shopitemcard key={id} {...otheritemprops}/>
                ))
            }
        </div>
    </div>
);

export default Previewshoopitems;