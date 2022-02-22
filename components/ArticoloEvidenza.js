import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import { Col, Row } from 'react-bootstrap'

export default function ArticoloEvidenza({ articoli }) {
    const articoliEvidenza = articoli.filter((articolo) => {
        return articolo.fields.evidenza
    })

    return (
        <div className="evidenza-container">
            {articoliEvidenza.map((articoliE) => {
                const { title, slug, immagineCopertina, publishedDate, tags } = articoliE.fields
                return (
                    <Col xs={12} className='card-container-evidenza mb-5'>
                        <Link href={'/blog/' + slug}>
                            <a>
                                <Row>
                                    <Col className='image-card-container p-6' xs={5} >
                                        <Image
                                            src={'https:' + immagineCopertina.fields.file.url}
                                            width={640}
                                            height={200}
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