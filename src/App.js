import React from 'react';
import classes from './App.module.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Switch, Route} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = ({state, ...props}) => {
  return (

      <div className={classes.app}>
        <Header/>
        <aside className={classes.sidebar}>
          <Navbar/>
          <Friends/>
        </aside>
        <div className={classes.app__wrap}>
          <Switch>
            <Route render={() => <Profile />}  path={'/profile'}/>
            <Route render={() => <DialogsContainer/>}  path={'/dialogs'}/>
            <Route render={() => <News/>}  path={'/news'}/>
            <Route render={()=> <Music/>}  path={'/music'}/>
            <Route render={()=> <Settings/>}  path={'/settings'}/>
          </Switch>
        </div>
      </div>
  );
};

export default App;
