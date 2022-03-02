
import CartolineHome from '../components/cartoline/Cartoline'
import JardinuPrev from '../components/JardinuPrev'
import MDA from '../components/MangiaDormiAma'
import BlogPrev from '../components/BlogPrev'
import ArticoliEvidenza from '../components/ArticoliEvidenza'
import { createClient } from 'contentful'
import useTranslation from 'next-translate/useTranslation'

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
  let { t } = useTranslation()
 
  return (

    <div className="homeBG">

      <CartolineHome />

      <h1>{t('common:greeting')}</h1>

      <JardinuPrev />

      <ArticoliEvidenza  articoli={articoli} />

      <MDA />

      <BlogPrev articoli={articoli}/>

    </div>
  )
}
