import React from 'react';
import classes from './App.module.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = ({state, ...props}) => {
  return (
      <Router>
        <div className={classes.app}>
          <Header/>
          <aside className={classes.sidebar}>
            <Navbar/>
            <Friends friends={state.sideBar.friends}/>
          </aside>
          <div className={classes.app__wrap}>
            <Switch>
              <Route render={() => <Profile store={props.store}/>}  path={'/profile'}/>
              <Route render={() => <DialogsContainer store={props.store}/>}  path={'/dialogs'}/>
              <Route render={() => <News/>}  path={'/news'}/>
              <Route render={()=> <Music/>}  path={'/music'}/>
              <Route render={()=> <Settings/>}  path={'/settings'}/>
            </Switch>
          </div>
        </div>
      </Router>
  );
};

export default App;
