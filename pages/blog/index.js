import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Row, Col } from 'react-bootstrap'
import { createClient } from 'contentful'
import { motion } from "framer-motion";
import Filters from '../../components/BlogFilters';
import ArticoloCard, { EventoProgettoCard } from '../../components/ArticoloCard'


export async function getStaticProps(context) {

  const locale = context.locale

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res = await client.getEntries({ content_type: 'blogPost', locale })
  return {
    props: {
      articoli: res.items
    },
    revalidate: 10
  }
}

export default function Blog({ articoli }) {

  const router = useRouter()

  const tagForFiltering = !!router.query.tag ? router.query.tag : ''

  const tagsArray = articoli.map((articolo) => (articolo.fields.tags))

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


    const filteredData = articoli.filter(post => {
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

  }, [queryFilter, articoli, tagForFiltering]);

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : articoli

  if (tagForFiltering === 'Eventi') {
    return (
      <Row className="blog-container d-flex justify-content-around">
        <h3 style={{textAlign: "center"}}>Ecco cosa abbiamo preparato per te!</h3>
        <Col xs={12} md={8} className="d-flex">
          {
            articoli.map((articolo) => {
              if (articolo.fields.tags === 'Eventi') {
                return (
                  <EventoProgettoCard key={articolo.fields.title} articolo={articolo} type='blog' />
                )
              }
            })
          }
        </Col>
      </Row>
    )
  } else if (tagForFiltering === 'Progetti') {
    return (
      <Row className="blog-container">
        <Col xs={10}>
          <p>non ci sono progetti ancora</p>
          {
            articoli.map((articolo) => {
              if (articolo.fields.tags === 'Progetti') {
                return (
                  <EventoProgettoCard key={articolo.fields.title} articolo={articolo} type='blog' />
                )
              }
            })
          }
        </Col>
      </Row>
    )
  }
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
          if (articolo.fields.tags === 'Eventi' || articolo.fields.tags === 'Progetti') {
            return (
              <EventoProgettoCard key={articolo.fields.title} articolo={articolo} type='blog' />
            )
          }
          return (
            <ArticoloCard key={articolo.sys.id} articolo={articolo} />
          )
        })}
      </Col>
    </Row>
  )
}