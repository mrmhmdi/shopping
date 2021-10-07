import React from 'react';
import './coustom-btn.styles.scss';

const Coustombtn = ({children, Googlesignin , ...otherprops}) => (
    <button className={` custom-button ${Googlesignin ? 'google-sign-in' : ''} `} {...otherprops}>
        {children}
    </button>
);

export default Coustombtn;

