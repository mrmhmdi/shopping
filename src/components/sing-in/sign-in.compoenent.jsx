import React from 'react';

import './sign-in.style.scss';

import Forminput from '../form-input/form-input.component';
import Coustombtn from '../coustom-btn/coustom-btn.component';

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            email: '',
            password: ''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();

        this.setState=({email: '', password: ''})
    }

    handleChange = event => {
         const {name, value} = event.target;

         this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>sign in with you eamil and password.</span>
                <form>
                    <Forminput 
                    type='email' 
                    name='email' 
                    label='email' 
                    value={this.state.email}
                    handleChange={this.handleChange} required />

                    <Forminput 
                    type='password' 
                    name='password' 
                    label='password'
                    value={this.state.password} 
                    handleChange={this.handleChange} required />

                    <Coustombtn type='submit' >Sign In</Coustombtn>
                </form>
            </div>
        )
    }
}

export default Signin;