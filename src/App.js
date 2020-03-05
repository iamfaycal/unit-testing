import React from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header/>
        <section className="main">
            <Headline header="Posts" description="Click the button to render posts"/>
        </section>
    </div>
  );
}

export default App;
