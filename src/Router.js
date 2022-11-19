import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/account/user/:userid" element={<User />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
