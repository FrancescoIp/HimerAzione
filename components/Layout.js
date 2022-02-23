import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

export default function Layout({ children }) {
  const [pageMarginTop, setPageMarginTop] = useState({
    margin:'100px',
    isOpen:false
  })

  return (
    <div className="layout">
      <Header pageMarginTop={pageMarginTop} setPageMarginTop={setPageMarginTop} />

      <div className="page-content">
        {children}
      </div>
      <Footer />
      <style jsx>{`
       .page-content {
        margin-top:100px
      }
      @media screen and (max-width: 767px) {
        .page-content {
          margin-top:${pageMarginTop.margin}
        }
      
      }
      `}
      </style>

    </div>
  )
}