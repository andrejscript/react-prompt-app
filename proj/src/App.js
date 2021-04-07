import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

const App = () => {

  return (
    <>
      <Header>
        <p>Параграф переданный props.children</p>
      </Header>

      <Sidebar>
        <a href="/">1</a>
        <a href="/">2</a>
        <a href="/">3</a>
      </Sidebar>
{/* 
      <Content> 
        <h1>
          Main Content Title
        </h1>
      </Content> */}
    </>
  )
}

export default App;
