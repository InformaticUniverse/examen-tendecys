import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark app-navbar mb-3">
      <div className="">
        <Link to="/" className="Nav__brand">
          <h2>Examen Tendecys</h2>
        </Link>
      </div>
    </nav>
  );
};
