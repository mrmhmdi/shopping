import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route } from 'react-router-dom';
import Shoppage from './pages/shoppage/shop.component';
import Header from '../src/components/header/header.component';
import Signinandsignup from './pages/signin-and-signup/signin-and-signup.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/signin' component={Signinandsignup} />
      </Switch>
    </div>
  );
}

export default App;
