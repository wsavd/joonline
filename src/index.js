import React from 'react';
import ReactDOM from 'react-dom';




import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/app'
import Home from './components/home'
import Item0 from './components/item0'
import Item1 from './components/item1'
import SearchBar from './components/searchBar'


ReactDOM.render(
  <Router basename="/joonline">
    <App>
      <Route exact path="/" component={Home}/>
      <Route path="/item0" component={Item0}/>
      <Route path="/item1" component={Item1}/>
      <SearchBar />
    </App>  
  </Router>,
  document.getElementById('root')
);