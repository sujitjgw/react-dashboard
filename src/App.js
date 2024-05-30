import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import SyncPage from './components/SyncPage';
import ListCsvPage from './components/ListCsvPage';
import LayeredFilterPage from './components/LayeredFilterPage';
import './components/component_css/Layout.css';
import TextChangesPage from './components/TextChangesPage';
import SiteWidePinCode from './components/SiteWidePinCode';
import CollectionTag from './components/CollectionTag';
import ProdSpecificPincode from './components/ProdSpecificPincode';
import UploadedData from './components/UploadedData';

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
          <Route path="/list" element={<Layout><ListCsvPage /></Layout>} />
          <Route path="/filter" element={<Layout><LayeredFilterPage /></Layout>} />
          <Route path="/text-change" element={<Layout><TextChangesPage /></Layout>} />
          <Route path="/sitewide-pincode" element={<Layout><SiteWidePinCode /></Layout>} />
          <Route path="/collection-tag" element={<Layout><CollectionTag /></Layout>} />
          <Route path="/product-specific-pincode" element={<Layout><ProdSpecificPincode /></Layout>} />
          <Route path="/uploaded-data" element={<Layout><UploadedData /></Layout>} />
        </Routes>
      </Router>
    </CounterContext.Provider>
  );
}

export default App;
