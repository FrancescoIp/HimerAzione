import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'



export default function ArticoloEvidenza({ articoli }) {
    const articoliEvidenza = articoli.filter((articolo) => {
        return articolo.fields.evidenza
    })

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const [isRendered, setIsRendered] = useState(null)

    useEffect(() => {
        setIsRendered(isDesktopOrLaptop)
    }, []);

    return (
        <>
        <div className="evidenza-container">
            <h3> Ultime Novità</h3>
            {articoliEvidenza.map((articoliE) => {
                const { title, slug, immagineCopertina } = articoliE.fields
                return (
                    <Col key={slug} className='card-container-evidenza mb-5'>
                        <Link href={'/blog/' + slug}>
                            <a>
                                <Row>
                                    <Col className='image-card-container p-6' xs={5} >
                                        <Image
                                            src={'https:' + immagineCopertina.fields.file.url}
                                            width={640}
                                            height={isRendered ? 200 : 800}
                                            layout='responsive'
                                            id='BlogPrevCardImg'
                                        />
                                    </Col>

                                    <Col className='text-container-evidenza' >
                                        <h4>{title}</h4>
                                    </Col>
                                </Row>
                            </a>
                        </Link>
                    </Col>
                )
            })}
        </div>
        </>
    )
}