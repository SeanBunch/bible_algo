import React from 'react';
import './style/App.css';
import Algo from "./components/Algo";
import Form from "./components/Form";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <div>
            <h1>Bible Reading Plan </h1>
            <h4>
                Read all of God's words.
            </h4>
            <p className="tx-10">
                ( Bible not included )
            </p>

        </div>
      </header>

      <p>
        Push the button to begin. Give your reading plan a name and how many days you want to commit to finsihing the enitre bible. (number of days required) 
      </p>

      <br/>
      
     

      <Form />

      <Algo />


    </div>
  );
}

export default App;
