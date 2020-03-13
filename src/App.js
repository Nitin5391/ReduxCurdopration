import React from 'react';
import Postform from './PostForm';
import Allpost from './AllPost';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
    <h2 className="center ">Post It</h2>
    </div>
      <Postform/>
      <Allpost/>
    </div>
    
  );
}

export default App;
