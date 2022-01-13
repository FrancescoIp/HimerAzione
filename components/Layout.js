import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <div></div>
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
        <div className='top-body-background'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#BBDEF0" fill-opacity="1" d="M0,192L60,197.3C120,203,240,213,360,229.3C480,245,600,267,720,277.3C840,288,960,288,1080,245.3C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
            </path>
          </svg>
        </div>
        <div className='bottom-body-background'></div>
        {children}
      </div>

      <footer>
        <p>Copyright 2021 Fripp :)</p>
      </footer>
    </div>
  )
}