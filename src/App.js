import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settigns from "./components/Settings/Settings";

function App() {
  return (
      <Router>
        <div className="app">
          <Header/>
          <Navbar/>
          <div className="app__wrap">
            <Switch>
              <Route component={Profile}  path={'/profile'}/>
              <Route component={Dialogs}  path={'/dialogs'}/>
              <Route component={News}  path={'/news'}/>
              <Route component={Music}  path={'/music'}/>
              <Route component={Settigns}  path={'/settings'}/>
            </Switch>
          </div>

        </div>
      </Router>
  );
}

export default App;
