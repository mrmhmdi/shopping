import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route } from 'react-router-dom';

const Hatpage = (props) => {
  console.log(props);
  return(
  <div>
    <h1>Hats page</h1>
  </div>
)}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={Hatpage} />
      </Switch>
    </div>
  );
}

export default App;
