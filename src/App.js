import React, { useState } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Pagination from './components/Pagination';
import Page from './components/Page';

function App() {
  const [currentPage, setCurrentPage] = useState(10);

  return (
    <div className="App">
      <Routes>
        <Route path='/page/:id' element={<Page />} />
      </Routes>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;