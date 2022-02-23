import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Row, Col } from 'react-bootstrap'
import { createClient } from 'contentful'
import { motion } from "framer-motion";
import Filters from '../../components/BlogFilters';
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

export default function Blog(props) {
  //to get the data from the Link component and use to filter the posts
  const router = useRouter()
  // const tagCategory = !router.query.data ?:
  const tagForFiltering = router.query.data
  console.log("tagForFiltering:", tagForFiltering)
  

  const tagsArray = props.articoli.map((articolo)=>(articolo.fields.tags))

  const emptyQuery = ""
  // need a better declaration of this useState
  const [state, setState] = useState({
    filteredData: [],
    ricerca: emptyQuery,
  });

  const [queryFilter, setQueryFilter] = useState('')

  const [radioValue, setRadioValue] = useState('Tutti');

  const handleValueChange = event => {
    setQueryFilter(event.target.value);
    setRadioValue(event.target.value)
  };

  useEffect(() => {
    const query = queryFilter

    const filteredData = props.articoli.filter(post => {
      const { title, slug, tags } = post.fields
      return (
        // standardize data with .toLowerCase()
        slug.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags.toLowerCase().includes(query.toLowerCase())
      )
    })
    setState({
      query,
      filteredData,
    })


  }, [queryFilter, props.articoli]);

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : props.articoli

  return (
    <Row className="blog-container">
      <Col xs={12} md={4}>
        <motion.h1 animate={{ y: 0 }} initial={{ y: -200 }} transition={{ stiffness: 170, type: "spring" }}>
          IL BLOG
        </motion.h1>

        <Filters
          handleValueChange={handleValueChange}
          postShowing={posts.length}
          radioValue={radioValue}
          tagsArray={tagsArray}
        />
      </Col>
      <Col xs={12} md={8} id='colonna-articoli'>
        {posts.map((articolo) => {
          return (
            <ArticoloCard key={articolo.sys.id} articolo={articolo} />
          )
        })}
      </Col>
    </Row>
  )
}