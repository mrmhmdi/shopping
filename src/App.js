import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import Shoppage from './pages/shoppage/shop.component';
import Header from '../src/components/header/header.component';
import Signinandsignup from './pages/signin-and-signup/signin-and-signup.component';
import { auth } from './firebase/firebase.util';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentuser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.nsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentuser: user })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentuser={this.state.currentuser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shoppage} />
          <Route exact path='/signin' component={Signinandsignup} />
        </Switch>
      </div>
    );
  
  }
}

export default App;
