import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from "react-scroll";
const NavStyles = styled.div`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  background-color: #e1c7eb;

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;

    li {
      display: inline-block;
      border-radius: 12px;
      transition: 0.3s ease background-color;

      &:hover {
        background-color: #d3d3d3;
      }
      
    }

    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 0.5rem 2rem;
      font-size: 1.5rem;
      color: black;
      outline: none;
    }

    .active {
      color: purple;
    }
  }

  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;

    * {
      pointer-events: none;
    }
  }

  .closeNavIcon {
    display: none;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    top: auto;
    bottom: 100%;
    left: 0;
    background-color: #e1c7eb;
    border-radius: 12px;
    padding: 1rem;
    width: 100%;
    z-index: 102;

    li {
      display: block;
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
  
    .mobile-menu-icon {
      display: block;
    }
  
    .top-bar {
      background-color: #e1c7eb;
      height: 3rem;
    }
  
    ul {
      display: flex;
      flex-direction: column; 
      align-items: center; 
    }
  
    .menu-open {
      ul {
        display: flex;
        flex-direction: column; 
        align-items: center; 
      }
  
      .menu .dropdown-menu {
        display: none;
      }
    }
    .menu:not(.menu-open) {
      display: none;
    }

    .menu.menu-open {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .menu-open .dropdown-menu {
      display: block;
    }

    .menu .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #d7a5eb;
      border-radius: 12px;
      padding: 1rem;
      width: 100%;
      z-index: 102;

      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutsideMenu = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.classList.contains("mobile-menu-icon")
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);
  

  return (
    <NavStyles>
      <div className="top-bar"></div>
      <div className={`mobile-menu-icon ${menuOpen ? 'menu-open' : ''}`} onClick={handleMenuToggle}>
        {menuOpen ? <MdClose /> : <MdMenu />}
      </div>
      <ul className={`menu ${menuOpen ? 'menu-open' : ''}`} ref={menuRef}>
        <div className="closeNavIcon" onClick={handleMenuToggle}>
          <MdClose />
        </div>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={handleMenuToggle}
            spy={true}
            offset={30}
          >
          Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={handleMenuToggle}
            spy={true}
            offset={20}
          >
          About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={handleMenuToggle}
            spy={true}
            offset={-10}
          >
          Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleMenuToggle}
            spy={true}
            offset={30}
          >
          Projects
          </Link>
        </li>
        <li className="dropdown-menu">
          <ul>
            <li>
              <NavLink to="/" exact onClick={handleMenuToggle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" onClick={handleMenuToggle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Skills" onClick={handleMenuToggle}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" onClick={handleMenuToggle}>
                Projects
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </NavStyles>
  );
}
