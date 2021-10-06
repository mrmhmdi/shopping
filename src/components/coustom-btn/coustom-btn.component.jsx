import React from 'react';
import './coustom-btn.styles.scss';

const Coustombtn = ({children, ...otherprops}) => (
    <button className='custom-button' {...otherprops}>
        {children}
    </button>
);

export default Coustombtn;

