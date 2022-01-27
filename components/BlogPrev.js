import Link from 'next/link'
import { Row } from 'react-bootstrap'

import ArticoloCard from './ArticoloCard'


export default function BlogPrev({ articoli }) {

    return (
        <div className='BlogPrev-container'>
            <Link id="BlogPrev-title" href='/blog'><a><h4>Raccontiamo Termini</h4></a></Link>
            <Row xs={1} md={2} className='justify-content-center mx-6 g-0'>
                {articoli.map((articolo) => {
                    return (

                        <ArticoloCard key={articolo.sys.id} articolo={articolo} />

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