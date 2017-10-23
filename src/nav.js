import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Query from './query.js';
import Add from './add.js'


const Nav = () =>(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Query}/>
      <Route path="/add" component={Add}/>
    </div>
  </BrowserRouter>
);

export default Nav;
