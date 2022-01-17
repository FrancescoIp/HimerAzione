import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'

export default function ArticoloCard({ articolo }) {
  const { title, slug, immagineCopertina, publishedDate } = articolo.fields

  return (
    <div className="card">
      <div className="featured">
        <Image
          src={'https:' + immagineCopertina.fields.file.url}
          // width={thumbnail.fields.file.details.image.width}
          // height={thumbnail.fields.file.details.image.height}
          width={300}
          height={230}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Pubblicato il: {dayjs(publishedDate).format("DD-MM-YYYY")}</p>
        </div>
        <div className="actions">
          <Link href={'/blog/' + slug}><a>clicca qui</a></Link>
        </div>
      </div>
      <style jsx>{`
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}