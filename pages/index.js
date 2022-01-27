
import Image from 'next/dist/client/image'
import CartolineHome from '../components/cartoline/Cartoline'
import JardinuPrev from '../components/JardinuPrev'
import MDA from '../components/MangiaDormiAma'
import BlogPrev from '../components/BlogPrev'
import Manutenzione from '../components/Manutenzione'
import { createClient } from 'contentful'

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


export default function Home({ articoli }) {
  return (
    // <Manutenzione/>
    <div className="homeBG">

      <CartolineHome/>


      <JardinuPrev />

      <MDA />

      <BlogPrev articoli={articoli}/>


    </div>
  )
}