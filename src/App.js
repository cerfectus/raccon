import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from "./components/Table"
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1> ¿ En la escala del Raccon como te sientes hoy ?</h1>
        
       <Table></Table>
      </div>
    );
  }
}

export default App;
