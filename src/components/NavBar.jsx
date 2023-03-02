import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function NavBar(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <HashLink className="navbar-brand" to="/"><PersonAddIcon className='logo-icon' style={{fontSize: '2rem'}}/>Sommet Technologies</HashLink>
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