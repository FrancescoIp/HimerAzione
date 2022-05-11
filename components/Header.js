import { Row, Col, Navbar, NavDropdown } from "react-bootstrap";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function Header({ pageMarginTop, setPageMarginTop }) {
  let { t } = useTranslation();
  let router = useRouter();

  const navLinksBorderAnimations = { borderBottom: "3px solid #fff" };
  function handleClick() {
    if (!pageMarginTop.isOpen) {
      setPageMarginTop({
        margin: "180px",
        isOpen: true,
      });
      return;
    }
    setPageMarginTop({
      margin: "100px",
      isOpen: false,
    });
  }

  return (
    <header>
      <Navbar
        expand="lg"
        fixed="top"
        className="navBarBG justify-content-around;"
      >
        <Link href="/" passHref className="LOGO">
          <a className="link-logo">
            <Image
              className="logo-navbar"
              src="/LOGO.png"
              alt="LOGO"
              width={150}
              height={75}
            />
          </a>
        </Link>

        <Navbar.Toggle
          onClick={(e) => handleClick()}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-around"
        >
          <Row className="align-items-center">
            <Col>
              <motion.span whileHover={navLinksBorderAnimations}>
                <NavLink href="/">
                  <a>{t("header:home")}</a>
                </NavLink>
              </motion.span>
            </Col>
            <Col>
              <NavDropdown
                title={t("header:raccontiamoTermini")}
                id="nav-dropdown"
              >
                <ul>
                  <motion.li whileHover={navLinksBorderAnimations}>
                    <NavLink href="/blog">
                      <a>{t("header:raccontiamoTermini1")}</a>
                    </NavLink>
                  </motion.li>
                  <motion.li whileHover={navLinksBorderAnimations}>
                    <NavLink
                      href={{
                        pathname: "/blog",
                        query: {
                          tag: "Progetti",
                        },
                      }}
                    >
                      <a>{t("header:raccontiamoTermini2")}</a>
                    </NavLink>
                  </motion.li>
                  <motion.li whileHover={navLinksBorderAnimations}>
                    <NavLink
                      href={{
                        pathname: "/blog",
                        query: {
                          tag: "Eventi",
                        },
                      }}
                    >
                      <a>{t("header:raccontiamoTermini3")}</a>
                    </NavLink>
                  </motion.li>
                </ul>
              </NavDropdown>
            </Col>
            <Col>
              <motion.span whileHover={navLinksBorderAnimations}>
                <NavLink href="/chisiamo">
                  <a>{t("header:mission")}</a>
                </NavLink>
              </motion.span>
            </Col>
            <Col>
              <motion.span whileHover={navLinksBorderAnimations}>
                <NavLink href="/contact">
                  <a>{t("header:contattaci")}</a>
                </NavLink>
              </motion.span>
            </Col>
            <Col>
              <NavDropdown title="Lingue" id="locales-dropdown">
                <ul>
                  {router.locales.map((locale) => {
                    return (
                      <li key={locale}>
                        <Link href={router.asPath} locale={locale}>
                          <a>
                            {locale === "it-IT"
                              ? t("common:locale-it")
                              : t("common:locale-uk")}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </NavDropdown>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
