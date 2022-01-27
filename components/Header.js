import { Row, Col, Navbar } from 'react-bootstrap'
import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <Row>
                <Navbar expand="lg" fixed='top' className='navBarBG'>
                    <Col sx={5} id="logo">
                        <Link href="/" passHref>
                            <a className='link-logo'>
                                <Image className='logo-navbar' src="/LOGO.png" alt="LOGO" width={150} height={75} />
                            </a>
                        </Link>
                    </Col>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Col sx={5} className='nav-links'>
                            <Link href="/contact"> Contattaci </Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="#progetti"> Progetti </Link>
                            <Link href="/chisiamo">Chi siamo</Link>
                        </Col>
                    </Navbar.Collapse>
                </Navbar>
            </Row>

        </header>
    )
}