import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import SyncPage from './components/SyncPage';
import UploadCsvPage from './components/UploadCsvPage';
import ListCsvPage from './components/ListCsvPage';
import LayeredFilterPage from './components/LayeredFilterPage';
import './components/component_css/Layout.css';

export const CounterContext = createContext();

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, setCount }}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/sync" element={<Layout><SyncPage /></Layout>} />
          <Route path="/upload" element={<Layout><UploadCsvPage /></Layout>} />
          <Route path="/list" element={<Layout><ListCsvPage /></Layout>} />
          <Route path="/filter" element={<Layout><LayeredFilterPage /></Layout>} />
        </Routes>
      </Router>
    </CounterContext.Provider>
  );
}

export default App;
