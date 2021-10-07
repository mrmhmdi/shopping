import React from 'react';
import {Link} from 'react-router-dom';
import  './header.style.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';

const Header = ({currentuser}) => (
    <div className='header'>
        <Link className='logo-container' to='/' >
            <Logo className='logo' />
        </Link>
        <div className='options-container'>
            <Link className='option' to='/shop' >shop</Link>
            <Link className='option' to='/contact' >contact</Link>
            { currentuser 
            ? <div className='option' onClick={ () => auth.signOut() } >Sign Out</div> 
            : <Link className='option' to='/signin' >Sign In</Link>
            }
        </div>
    </div>
);

export default Header;