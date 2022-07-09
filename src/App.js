import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';

import Homepage  from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header';
import Auththenticate from './pages/auth/auth';

import { auth, creatUserprofileDocument } from './firebase/firebase.util';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribeFromAuth = null

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth){
        const userRef = await creatUserprofileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
           currentUser: { id: snapShot.id,
            ...snapShot.data(),
           }
          }, () => {console.log(this.state)})
        });
       
      }else {
        this.setState({currentUser : userAuth });
      }
      //this.setState({currentUser: user});
    })
  }


  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/auth' element={<Auththenticate/>} />
        </Routes>
    
      </div>
    );
  }
}

export default App;
