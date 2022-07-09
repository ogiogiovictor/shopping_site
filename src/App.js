import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';

import Homepage  from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header';
import Auththenticate from './pages/auth/auth';

import { auth, creatUserprofileDocument } from './firebase/firebase.util';
import {connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubcribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      if(userAuth){
        const userRef = await creatUserprofileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
            id: snapShot.id,
            ...snapShot.data(),
           
          })
        });
       
      }else {
        setCurrentUser(userAuth);
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
        <Header/>
        <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/auth' element={<Auththenticate/>} />
        </Routes>
    
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
