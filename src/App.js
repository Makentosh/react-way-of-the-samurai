import React from 'react';
import classes from './App.module.scss';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends';
import FindUsers from './components/FindUsers';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login';
import {connect} from 'react-redux';
import Header from './components/Header';
import {initializeApp} from './redux/appReducer';
import Loader from './components/Loader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) {
      return <Loader/>
    }

    return (
        <div className={classes.app}>
          <Header/>
          <aside className={classes.sidebar}>
            <Navbar/>
            <Friends/>
          </aside>
          <div className={classes.app__wrap}>
            <Route render={() => <Profile />}  path={'/profile/:userId?'}/>
            <Route render={() => <DialogsContainer/>}  path={'/dialogs'}/>
            <Route render={() => <News/>}  path={'/news'}/>
            <Route render={()=> <Music/>}  path={'/music'}/>
            <Route render={()=> <Settings/>}  path={'/settings'}/>
            <Route render={()=> <FindUsers/>}  path={'/find'}/>

            <Route render={()=> <Login/>}  path={'/login'}/>
          </div>
        </div>
    )
  }
}

const mspStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mspStateToProps, {initializeApp})(withRouter(App));
