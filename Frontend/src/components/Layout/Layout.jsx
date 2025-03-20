import React from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import './Layout.css';

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};