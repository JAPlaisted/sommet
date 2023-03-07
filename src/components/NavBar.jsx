import React from 'react';
import { HashLink } from 'react-router-hash-link';

function NavBar(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <HashLink className="navbar-brand" to="/"><img src="https://cdn.midjourney.com/966ff00a-2919-487b-be93-06350a802c1c/grid_0.png" alt="developer logo" className='logo' />Sommet Technologies</HashLink>
      <ul className="navbar-nav">
        <li className="nav-item"><HashLink className="nav-link" to="/blogs">Blog</HashLink></li>
        <li className="nav-item"><HashLink className="nav-link" to="/mission">Mission</HashLink></li>
        <li className="nav-item">
          <a href="mailto: jonathan.plaisted@outlook.com" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
    );
}

export default NavBar;