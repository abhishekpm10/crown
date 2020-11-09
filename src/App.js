import Homepage from './pages/homepage/homepage';
import './app.css'
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shopdata/shop.component';
import Header from './components/header/header.component'

const HatsPage= ()=>(
  <div>
    <h1>
      Hats Page Here
    </h1>
  </div>
)
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
