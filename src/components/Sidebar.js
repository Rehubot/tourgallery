import React, { Component } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

import Footer from './Footer';
import Home from './Home';
import Gallery from './Gallery';
import About from './About';

function Sidebar() {
        return (
          <div >
              <aside className="annie-aside">
                  <Logo></Logo>
                  <Navbar></Navbar>  
                  <Footer></Footer>
              </aside>
          </div>
        );
} 

export default Sidebar;
