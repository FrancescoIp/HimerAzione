import Link from 'next/link'
import { Row } from 'react-bootstrap'

import ArticoloCard from './ArticoloCard'


export default function BlogPrev({ articoli }) {

    return (
        <div className='BlogPrev-container'>
            <Link id="BlogPrev-title" href='/blog'>
                <a>
                    <h4>Raccontiamo Termini</h4>
                </a>
            </Link>
            <Row className='justify-content-between g-0'>
                {articoli.slice(0, 4).map((articolo) => {
                    return (
                        <ArticoloCard key={articolo.sys.id} articolo={articolo} type='home'/>
                    )
                })}
            </Row>
            <style jsx>
                {`
                   a {
                    text-decoration: none;
                    color: black
                   }
                   a:hover{
                       color: blue
                   }
                   h4{
                    margin-bottom: 30px;
                    width: 20%;
                    border-left: 3px solid #FAE92B;
                    padding-left: 3px;
                    font-size: 1.8em;
                    
                }
                `}
            </style>
        </div>
    )
}