import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import "./style/header.css";
import "./style/main.css";


function App() {
  return (
    <>
    <div className='container'>

      <Header />
      <Main />
    </div>
    </>
  );
}

export default App;
