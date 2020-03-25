import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings/Settings";

const App = ({state, ...props}) => {
  return (
      <Router>
        <div className="app">
          <Header/>
          <Navbar/>
          <div className="app__wrap">
            <Switch>
              <Route render={() => <Profile posts={state.profilePage.posts}/>}  path={'/profile'}/>
              <Route render={() => <Dialogs messages={state.messagePage.messages} dialogs={state.messagePage.dialogs}/>}  path={'/dialogs'}/>
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
