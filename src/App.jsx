import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteComp from './components/commons/RouteComp';
import Navbar from './components/commons/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteComp />
    </BrowserRouter>
  );
}
