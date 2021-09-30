import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route } from 'react-router-dom';
import Shoppage from './pages/shoppage/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
