import Link from 'next/link'
import { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'articoloBlog' })
  
  console.log("ciao")
  return {
    props: {
      recipes: res.items
    },
    revalidate: 10
  }
}

export default function Recipes({recipes}) {
  return (
    <div className="recipe-list">
      <style jsx>
        {`
          .recipe-list{
            text-align: center;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
          }
        `}
      </style>
    </div>
  )
}