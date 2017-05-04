import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/home'
import Item0 from './components/item0'
import Item1 from './components/item1'
import SearchBar from './components/searchBar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

  this.videoSearch('surfboards');
  }
  /*получили видосы с сервера и залили в состояние*/
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
        <SearchBar />
        {/*отправили видосы в другой компонент*/}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <Router basename="/joonline">
    <App>
      <Route exact path="/" component={Home}/>
      <Route path="/item0" component={Item0}/>
      <Route path="/item1" component={Item1}/>
    </App>  
  </Router>,
  document.getElementById('root')
);