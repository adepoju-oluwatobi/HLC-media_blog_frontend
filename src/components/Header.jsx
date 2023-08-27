import React from 'react'
import MenuIcon from '../assets/menu-icon.svg'
import CloseIcon from '../assets/menu-close-icon.svg'
import Logo from '../assets/logo.png'

function Header() {
    let MenuOpenIcon = document.getElementById("menu-open-icon");
    let MenuCloseIcon = document.getElementById('menu-close-icon');
    let NavMenu = document.getElementById('nav-menu');

    function openMenu(){
        NavMenu = document.getElementById("nav-menu").style.display = "flex"
        MenuOpenIcon = document.getElementById("menu-open-icon").style.display = "none"
        MenuCloseIcon = document.getElementById("menu-close-icon").style.display = "block"
    }
    function closeMenu(){
        NavMenu = document.getElementById("nav-menu").style.display = "none";
        MenuOpenIcon = document.getElementById("menu-open-icon").style.display =
          "block";
        MenuCloseIcon = document.getElementById(
          "menu-close-icon"
        ).style.display = "none";
    }
  return (
    <div>
      <div className="header">
        <div className="flex items-center gap-2">
          <img className='site-logo' src={Logo} alt="" />
          <p className="site-title">HLC media</p>
        </div>
        <img onClick={closeMenu} id='menu-close-icon' className="menu-close-icon" src={CloseIcon} alt="" />
        <img onClick={openMenu} id='menu-open-icon' className="menu-icon" src={MenuIcon} alt="" />
        <nav id='nav-menu' className="nav-menu">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Header