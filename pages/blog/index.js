import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import { BsFillTriangleFill } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from 'contentful'
import { motion, AnimatePresence } from "framer-motion";
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

function Filters(props) {
  const [showFilters, setShowFilters] = useState(false)
  return (
    <Row>
      <Col xs={12}>
        <input
          className="input-spread"
          type="text"
          aria-label="Search"
          placeholder="Cerca l'articolo scrivendo qui"
          onChange={props.handleValueChange}
        />
      </Col>
      <Col xs={12} className='d-flex justify-content-between filter-border-bottom'>
        <span>Filtri</span>
        <motion.div onClick={() => setShowFilters(!showFilters)}
          animate={{ rotate: showFilters ? 180 : 0 }}
        >
          <BsFillTriangleFill size={13} />
        </motion.div>
      </Col>
      <AnimatePresence>
        {showFilters &&
          <motion.div
            key='filters'
            style={{ marginBottom: "10px" }}
            animate=
            {{
              opacity: showFilters ? 1 : 0,
              y: showFilters ? 0 : -30
            }}
            initial={{ opacity: 0, y: -15 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: .5 }}

          >
            <button onClick={props.handleValueChange} value="">All</button>
            <button onClick={props.handleValueChange} value="Chiese">Chiese</button>
            <button onClick={props.handleValueChange} value="Musei">Musei</button>
            <button onClick={props.handleValueChange} value="Cultura">Cultura</button>
          </motion.div>
        }
      </AnimatePresence>
      <Col md={2}>
        Articoli: {props.postShowing}
      </Col>
    </Row>
  )
}

export default function Recipes({ articoli }) {

  const emptyQuery = ""
  // need a better declaration of this useState
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });

  const [queryFilter, setQueryFilter] = useState("")

  const handleValueChange = event => {
    setQueryFilter(event.target.value)
  };

  useEffect(() => {
    const query = queryFilter
    const posts = articoli || []

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

  }, [queryFilter, articoli]);

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : articoli

  return (
    <div className="blog-container">
      <motion.h1 animate={{ y: 0 }} initial={{ y: -200 }} transition={{ stiffness: 170, type: "spring" }}>
        IL BLOG
      </motion.h1>
      <Filters
        handleValueChange={handleValueChange}
        postShowing={posts.length}
      />
      <motion.div animate>
        {articoli.map((articolo) => {
          return (
            <ArticoloCard key={articolo.sys.id} articolo={articolo} />
          )
        })}
      </motion.div>

    </div>
  )
}