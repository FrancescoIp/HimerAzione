import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              Himera Azione
            </h1>
            <h2>Spread The Joy</h2>
            <Link href="/contact"> Contattaci - </Link>
            <Link href="/blog">go to blog</Link>
          </a>
        </Link>
      </header>

      <div className="page-content">
        {children}
      </div>

      <footer>
        <p>Copyright 2021 Fripp :)</p> 
      </footer>
    </div>
  )
}