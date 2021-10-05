import React from 'react';
import './form-input.style.scss';

const Forminput = ({handleChange, label, ...otherprops}) => (
    <div className='group'>
        <input className='form-input' onchange={handleChange} {...otherprops} />
        {
            label ? (
            <label className={`${null ? 'shrink' : '' } form-input-label`} >
                {label}
            </label>
            ) : null
        }
    </div>
);

export default Forminput;