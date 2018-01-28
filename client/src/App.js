import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import './App.css';

import Users from './components/usersComponent';
import Posts from './components/posts';
import Comments from './components/comments';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Route exact path='/home' component={Users} />
        <Route exact path='/' component={Users} />
        <Route exact path='/users' component={Users} />
        <Route path='/posts/:id' exact component={Posts} />
        <Route path='/comments/:id' component={Comments} />

      </div >
    );
  }
}

export default App;
