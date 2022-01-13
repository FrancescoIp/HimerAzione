
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image'
import Skeleton from '../../components/Skeleton'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogPost"
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { articolo: items[0] },
    revalidate: 10
  }

}

export default function ArticoloDettagli({ articolo }) {
  
  if(!articolo) return <Skeleton />

  const {title, tags, body, immagineCopertina} = articolo.fields

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
          console.log(node)
         const alt = node.data.target.fields.title
         const url = node.data.target.fields.file.url
         return <Image alt={alt} src={"https:" + url} width={300} height={230} />
      }
    }
 }

  return (
    <div>
      <div className="banner">
        <Image
          src={'https:' + immagineCopertina.fields.file.url}
          // width={thumbnail.fields.file.details.image.width}
          // height={thumbnail.fields.file.details.image.height}
          width={1200}
          height={400}
        />
        <h2>{title}</h2>
        <div className="info">
          <p>Tags: {tags}</p>
        </div>
        <div className="method">
          <div>{documentToReactComponents(body,options)}</div>
        </div>
      </div>
      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    </div>
  )
}