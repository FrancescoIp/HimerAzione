import Link from 'next/link'
import { Row, Col, Navbar} from 'react-bootstrap'
import React, { useRef, useEffect, useState } from 'react';
import Footer from './Footer';
import Image from 'next/image'




export default function Layout({ children }) {

  return (
    <div className="layout">
      <header>
        <Row>
          <Navbar expand="lg" fixed='top' className='navBarBG'>
            <Col id="logo">
              <Navbar.Brand>
                <Link href="/"> HimerAzione </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Col>
            <Navbar.Collapse id="basic-navbar-nav">
              <Col className='nav-links'>
                <Link href="/contact"> Contattaci </Link>
                <Link href="/blog">go to blog</Link>
                <Link href="/contact"> Contattaci </Link>
                <Link href="/blog">go to blog</Link>
              </Col>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <svg id="visual" viewBox="0 0 2000 153" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <rect x="0" y="0" width="2000" height="200" fill="#BBDEF0" fillOpacity="0"></rect>
          <path d="M0 66L27.8 78C55.7 90 111.3 114 166.8 128.3C222.3 142.7 277.7 147.3 333.2 142.8C388.7 138.3 444.3 124.7 500 109.3C555.7 94 611.3 77 666.8 78.7C722.3 80.3 777.7 100.7 833.2 113.8C888.7 127 944.3 133 1000 134.8C1055.7 136.7 1111.3 134.3 1166.8 121.3C1222.3 108.3 1277.7 84.7 1333.2 77.8C1388.7 71 1444.3 81 1500 93C1555.7 105 1611.3 119 1666.8 119.5C1722.3 120 1777.7 107 1833.2 100.7C1888.7 94.3 1944.3 94.7 1972.2 94.8L2000 95L2000 0L1972.2 0C1944.3 0 1888.7 0 1833.2 0C1777.7 0 1722.3 0 1666.8 0C1611.3 0 1555.7 0 1500 0C1444.3 0 1388.7 0 1333.2 0C1277.7 0 1222.3 0 1166.8 0C1111.3 0 1055.7 0 1000 0C944.3 0 888.7 0 833.2 0C777.7 0 722.3 0 666.8 0C611.3 0 555.7 0 500 0C444.3 0 388.7 0 333.2 0C277.7 0 222.3 0 166.8 0C111.3 0 55.7 0 27.8 0L0 0Z" fill="#5EB1B6" strokeLinecap="round" strokeLinejoin="miter">
          </path>
        </svg>
      </header>

      <div className="page-content">
        {children}
      </div>
      <Footer/>

    </div>
  )
}