import Link from 'next/link'
import Polaroid from '../components/Cartoline/polaroid'
import CartolinaDonation from '../components/cartoline/CartolinaDonation'
import { createClient } from 'contentful'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'articoloBlog' })

  return {
    props: {
      recipes: res.items
    },
    revalidate: 10
  }
}

export default function Home() {
  return (
    <div className="homeBG">
      <div className='cartoline-container'>
        <Polaroid></Polaroid>
        <CartolinaDonation></CartolinaDonation>

      </div>
      <div className='box'></div>
    </div>
  )
}