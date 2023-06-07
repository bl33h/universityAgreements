import React from 'react';
import Login from './login';
import { Routes, Route } from 'react-router-dom';

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Page;
