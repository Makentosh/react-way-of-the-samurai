import React from 'react';
import classes from './App.module.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings/Settings";
import Friends from './components/Friends';

const App = ({state, ...props}) => {
  return (
      <Router>
        <div className={classes.app}>
          <Header/>
          <aside className={classes.sidebar}>
            <Navbar/>
            <Friends friends={state.friends}/>
          </aside>
          <div className={classes.app__wrap}>
            <Switch>
              <Route render={() => <Profile posts={state.profilePage.posts}
                                            dispatch={props.dispatch}
                                            newPostText={state.profilePage.newPostText}/>}  path={'/profile'}/>
              <Route render={() => <Dialogs messages={state.messagePage.messages}
                                            dialogs={state.messagePage.dialogs}
                                            dispatch={props.dispatch}
                                            newDialogMessageText={state.messagePage.newDialogMessageText}
                                            />}  path={'/dialogs'}/>
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
