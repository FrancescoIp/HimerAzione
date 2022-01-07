import Link from 'next/link'
import Image from 'next/image'
import { createClient } from 'contentful'
import RecipeCard from '../../components/RecipeCard'
import ArticoloCard from '../../components/ArticoloCard'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'blogPost' })
  

  return {
    props: {
      articoli: res.items
    },
    revalidate: 10
  }
}

export default function Recipes({articoli}) {
  console.log(articoli)
  return (
    <div className="recipe-list">
      <Link href="/">back home</Link>
      {articoli.map((articolo)=>{
        return(
          <ArticoloCard key={articolo.sys.id} articolo={articolo}/>
        )
      })}

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