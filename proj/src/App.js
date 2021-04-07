import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header>
        <p>Параграф переданный props.children</p>
      </Header>

      <div style={{ display: 'flex' }}>
        <Sidebar />

        <Route path='/characters' component={Content} />
        <Route path='/random-char' component={Content} />

        <Content>
          <h1>Main page title</h1>
        </Content>
      </div>
    </Router>
  );
};

export default App;
