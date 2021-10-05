import React from 'react';
import './sign-in.style.scss';
import Forminput from '../form-input/form-input.component';

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
         console.log(value)
    }

    render() {
        return(
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>sign in with you eamil and password.</span>
                <form>
                    <Forminput type='email' name='email' label='email' handleChange={this.handleChange} required />
                    <Forminput type='password' name='password' label='password' handleChange={this.handleChange} required />
                    <input type='submit' name='submit' />
                </form>
            </div>
        )
    }
}

export default Signin;