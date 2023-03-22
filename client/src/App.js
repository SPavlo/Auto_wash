import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import QueryList from "./components/QueryList";
import {BrowserRouter} from "react-router-dom";
import './styles/App.css'
import AppRouter from "./components/AppRouter";

function App() {

  return (
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>


  );
}

export default App;
