import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import RouteComp from '../src/components/commons/RouteComp'
import Navbar from './components/commons/NavBar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteComp />
    </BrowserRouter>
  );
}


