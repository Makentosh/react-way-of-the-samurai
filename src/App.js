import React from 'react';
import classes from './App.module.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindUsers from './components/FindUsers';

const App = ({state, ...props}) => {
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
        </div>
      </div>
  );
};

export default App;
