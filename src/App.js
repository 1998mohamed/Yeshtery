import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import HeaderUp from './components/HeaderUP'
import HeaderDown from './components/HeaderDown';
import Section from './components/Section'
import {DataProvider} from './components/Context'
import Footer from './components/Footer';


class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <HeaderUp />
            <HeaderDown />
            <Section />
            <Footer />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
