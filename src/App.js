import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request'
import Banner from './Banner';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
       <Nav />
      <Router>
        <Switch>
          
          <Route path="/latest">
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;