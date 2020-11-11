import Homepage from './pages/homepage/homepage';
import './app.css'
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shopdata/shop.component';
import Header from './components/header/header.component'
import SignIn from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
import {React,Component} from 'react'

class App extends Component{

  constructor()
  {
      super();

      this.state={
        currentUser:null
      }
  }

  unsubscribeFromAuth=null

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignIn}></Route>
          
        </Switch>
      </div>
    );
  }
  
}

export default App;
