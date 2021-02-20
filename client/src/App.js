import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/homePage/HomePage'
import ShopPage from './pages/shopPage/ShopPage'
import SignInSignUp from './pages/signInSignUp/signInSignUp'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
