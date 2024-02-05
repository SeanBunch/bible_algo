import React from 'react';
import './style/App.css';
import Algo from "./components/Algo";
import Form from "./components/Form";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <Algo />
      </header>

      <p>
        To begin push the button and fill out the form. Give your reading plan a name and how many days you want to take to finished the whole bible. (number of days required) 
      </p>

      <br/>
      
      <button>
        Begin
      </button>

      <Form />



    </div>
  );
}

export default App;
