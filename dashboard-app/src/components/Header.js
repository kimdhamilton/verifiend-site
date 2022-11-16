import React, { useState, useEffect, Text } from "react";
import logo from '../images/verifiend_logo.jpg';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
          <img src={logo} className="Logo" alt="logo" />
      <nav className="Nav">
        <a href="/">Home</a>
        <a href="https://github.com/kimdhamilton/verifiend">Github</a>
        <a href="https://twitter.com/home">About</a>
      </nav>
    </header>
  );
}