import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from "./app/pages/home/Home";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Home/>
        </div>
    </BrowserRouter>
  );
}

export default App;
