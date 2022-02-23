import React from 'react'
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

    return (
        <div className="evidenza-container">
            {articoliEvidenza.map((articoliE) => {
                const { title, slug, immagineCopertina } = articoliE.fields
                return (
                    <Col key={slug} xs={12} className='card-container-evidenza mb-5'>
                        <Link href={'/blog/' + slug}>
                            <a>
                                <Row>
                                    <Col className='image-card-container p-6' xs={5} >
                                        <Image
                                            src={'https:' + immagineCopertina.fields.file.url}
                                            width={640}
                                            height={isDesktopOrLaptop ? 200 : 800}
                                            layout='responsive'
                                            id='BlogPrevCardImg'
                                        />
                                    </Col>

                                    <Col className='text-container-evidenza' >
                                        <h3>{title}</h3>
                                    </Col>
                                </Row>
                            </a>
                        </Link>
                    </Col>
                )
            })}

        </div>
    )
}