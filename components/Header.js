import { Row, Col, Navbar } from 'react-bootstrap'
import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink';

export default function Header({ pageMarginTop, setPageMarginTop }) {


    const navLinksBorderAnimations = { borderBottom: '3px solid #fff' }
    function handleClick() {
        if (!pageMarginTop.isOpen){
            setPageMarginTop({
                margin: '180px',
                isOpen: true
            })
            return
        }
        setPageMarginTop({
            margin: '100px',
            isOpen: false
        })
    }

    return (
        <header>
            <Row>
                <Navbar expand="lg" fixed='top' className='navBarBG justify-content-around;'>

                    <Link href="/" passHref className="LOGO">
                        <a className='link-logo'>
                            <Image className='logo-navbar' src="/LOGO.png" alt="LOGO" width={150} height={75} />
                        </a>
                    </Link>

                    <Navbar.Toggle onClick={(e) => handleClick()} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Col sx={5} className='nav-links '>
                            <motion.span whileHover={navLinksBorderAnimations}>
                                <NavLink href="/">
                                    <a>HOME</a>
                                </NavLink>
                            </motion.span>
                            <motion.span whileHover={navLinksBorderAnimations}>
                                <NavLink href="/blog">
                                    <a>BLOG</a>
                                </NavLink>
                            </motion.span>
                            <motion.span whileHover={navLinksBorderAnimations}>
                                <NavLink href="/progetti">
                                    <a>PROGETTI</a>
                                </NavLink>
                            </motion.span>
                        </Col>
                        <Col className='nav-links nav-end'>
                            <motion.span whileHover={navLinksBorderAnimations}>
                                <NavLink href="/chisiamo">
                                    <a>MISSION</a>
                                </NavLink>
                            </motion.span>
                            <motion.span whileHover={navLinksBorderAnimations}>
                                <NavLink href="/contact">
                                    <a>CONTATTACI</a>
                                </NavLink>
                            </motion.span>
                        </Col>
                    </Navbar.Collapse>
                </Navbar>
            </Row>

        </header>
    )
}