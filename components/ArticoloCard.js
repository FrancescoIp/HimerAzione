import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import { Col, Row } from 'react-bootstrap'

export default function ArticoloCard({ articolo, type }) {
  const { title, slug, immagineCopertina, publishedDate, tags, autore } = articolo.fields
  const columnDimension  = type == 'home' ? 5 : 8

  return (
    <Col xs={12} md={columnDimension} className='card-container mb-5'>
      <Link href={'/blog/' + slug}>
        <a>
          <Row>
            <Col className='image-card-container p-6' xs={5} >
              <Image
                src={'https:' + immagineCopertina.fields.file.url}
                // width={thumbnail.fields.file.details.image.width}
                // height={thumbnail.fields.file.details.image.height}
                width={140}
                height={210}
                layout='responsive'
                id='BlogPrevCardImg'
              />
            </Col>
            <Col className='text-container' >
              <p>Pubblicato il: {dayjs(publishedDate).format("DD-MM-YYYY")}</p>
              <h4>{title}</h4>
              {/* the second p is positioned at the bottom of the blog-card */}
              <p>{autore ? 'Autore: ' + autore : 'Autore'}</p>
              <p>{'tags: ' + tags}</p>
            </Col>
          </Row>
        </a>
      </Link>
    </Col>
  )
}