import Link from 'next/link'
import { Row, Col, Navbar} from 'react-bootstrap'
import React, { useRef, useEffect, useState } from 'react';
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

      <footer>
        <svg id="wavesFooter" viewBox="0 351 583 163" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <rect x="0" y="0" width="960" height="540" fill="#BBDEF0">
          </rect>
          <path d="M0 358L12.3 359.2C24.7 360.3 49.3 362.7 74 361.5C98.7 360.3 123.3 355.7 148 357.8C172.7 360 197.3 369 221.8 372C246.3 375 270.7 372 295.2 369.2C319.7 366.3 344.3 363.7 369 364.3C393.7 365 418.3 369 443 370.2C467.7 371.3 492.3 369.7 517 365.5C541.7 361.3 566.3 354.7 591 353.8C615.7 353 640.3 358 664.8 357.5C689.3 357 713.7 351 738.2 351C762.7 351 787.3 357 812 362.7C836.7 368.3 861.3 373.7 886 374.3C910.7 375 935.3 371 947.7 369L960 367L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z" fill="#bbdef0"></path>
          <path d="M0 415L12.3 412.2C24.7 409.3 49.3 403.7 74 397.7C98.7 391.7 123.3 385.3 148 383.5C172.7 381.7 197.3 384.3 221.8 389C246.3 393.7 270.7 400.3 295.2 400C319.7 399.7 344.3 392.3 369 390C393.7 387.7 418.3 390.3 443 389.8C467.7 389.3 492.3 385.7 517 387.2C541.7 388.7 566.3 395.3 591 398.8C615.7 402.3 640.3 402.7 664.8 398.3C689.3 394 713.7 385 738.2 386.2C762.7 387.3 787.3 398.7 812 401.2C836.7 403.7 861.3 397.3 886 398C910.7 398.7 935.3 406.3 947.7 410.2L960 414L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z" fill="#a4d2e4"></path>
          <path d="M0 427L12.3 427C24.7 427 49.3 427 74 428.3C98.7 429.7 123.3 432.3 148 436.3C172.7 440.3 197.3 445.7 221.8 448C246.3 450.3 270.7 449.7 295.2 447.5C319.7 445.3 344.3 441.7 369 442C393.7 442.3 418.3 446.7 443 445.2C467.7 443.7 492.3 436.3 517 429.8C541.7 423.3 566.3 417.7 591 415.2C615.7 412.7 640.3 413.3 664.8 415.8C689.3 418.3 713.7 422.7 738.2 424.2C762.7 425.7 787.3 424.3 812 425.8C836.7 427.3 861.3 431.7 886 435.2C910.7 438.7 935.3 441.3 947.7 442.7L960 444L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z" fill="#8cc7d6"></path>
          <path d="M0 481L12.3 480.2C24.7 479.3 49.3 477.7 74 475.5C98.7 473.3 123.3 470.7 148 471C172.7 471.3 197.3 474.7 221.8 472C246.3 469.3 270.7 460.7 295.2 457.5C319.7 454.3 344.3 456.7 369 460.2C393.7 463.7 418.3 468.3 443 472.3C467.7 476.3 492.3 479.7 517 480.5C541.7 481.3 566.3 479.7 591 476.7C615.7 473.7 640.3 469.3 664.8 471C689.3 472.7 713.7 480.3 738.2 482.2C762.7 484 787.3 480 812 479.8C836.7 479.7 861.3 483.3 886 481.3C910.7 479.3 935.3 471.7 947.7 467.8L960 464L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z" fill="#75bcc7"></path>
          <path d="M0 508L12.3 506.3C24.7 504.7 49.3 501.3 74 497.7C98.7 494 123.3 490 148 490.3C172.7 490.7 197.3 495.3 221.8 494.8C246.3 494.3 270.7 488.7 295.2 489.8C319.7 491 344.3 499 369 499C393.7 499 418.3 491 443 487.8C467.7 484.7 492.3 486.3 517 488.8C541.7 491.3 566.3 494.7 591 499.2C615.7 503.7 640.3 509.3 664.8 508.7C689.3 508 713.7 501 738.2 500.8C762.7 500.7 787.3 507.3 812 508.8C836.7 510.3 861.3 506.7 886 505.7C910.7 504.7 935.3 506.3 947.7 507.2L960 508L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z" fill="#5eb1b6"></path>
        </svg>
        <p>Copyright 2021 Fripp :)</p>
      </footer>


    </div>
  )
}