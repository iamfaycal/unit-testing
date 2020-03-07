import React from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './App.scss';

const tempArr = [{
    firstname: 'Joe',
    lastname: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 21,
    onlineStatus: true
}];

function App() {
  return (
    <div className="App">
        <Header/>
        <section className="main">
            <Headline header="Posts" description="Click the button to render posts" tempArr={tempArr}/>
        </section>
    </div>
  );
}

export default App;
