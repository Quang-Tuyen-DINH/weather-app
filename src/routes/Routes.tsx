import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/ui/nav-bar/NavBar';
import Landing from '../pages/landing/Landing';
import Weather from '../pages/weather/Weather';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes