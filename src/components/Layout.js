import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './component_css/Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarRef = useRef();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    const newWidth = isSidebarOpen ? "80px" : "250px";
    sidebarRef.current.style.width = newWidth;
  };
  return (
    <div className="layout-container">
      <aside ref={sidebarRef} className="sidebar">
        <div className="sidebar-header">
          <div><Link to="/">Logo</Link></div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/"><i className="fas fa-home fa-lg"></i> {isSidebarOpen && "Dashboard"}</Link></li>
            <li><Link to="/sync"><i className="fas fa-sync fa-lg"></i> {isSidebarOpen && "Sync Shopify Product"}</Link></li>
            <li><Link to="/upload"><i className="fas fa-upload fa-lg"></i> {isSidebarOpen && "Upload CSV Data"}</Link></li>
            <li><Link to="/list"><i className="fas fa-list fa-lg"></i> {isSidebarOpen && "List CSV Data"}</Link></li>
            <li><Link to="/filter"><i className="fas fa-filter fa-lg"></i> {isSidebarOpen && "Layered Filter Data"}</Link></li>
            <li><Link to="/settings"><i className="fas fa-cog fa-lg"></i> {isSidebarOpen && "Settings"}</Link></li> 
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <div><i className='fa fa-bars' onClick={toggleSidebar}></i></div>
          <div><button className="btn btn-dark">Logout</button></div>
        </header>
        <section className="content-section">
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
