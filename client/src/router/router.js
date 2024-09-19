import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import SaveFileDetail from '../screens/SaveFileDetail';
import Upload from '../screens/Upload';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/save/:id" element={<SaveFileDetail />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
};

export default AppRouter;
