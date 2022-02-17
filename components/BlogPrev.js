import Link from 'next/link'
import { Row } from 'react-bootstrap'
import { motion } from "framer-motion";

import ArticoloCard from './ArticoloCard'


export default function BlogPrev({ articoli }) {

    const marqVariants = {
        animate: {
            x: -2287,
            opacity: 1,
            transition: {
                repeat: Infinity,
                repeatDelay: 1.8,
                ease: "linear",
                duration: 6
            },
        }
    }
    const marqVariants1 = {
        animate: {
            x: -2285,
            opacity: 1,
            transition: {
                repeat: Infinity,
                repeatDelay: 1.8,
                ease: "linear",
                duration: 6,
                delay: 4

            },
        }
    }

    return (
        <div className='BlogPrev-container'>
            <Link id="BlogPrev-title" href='/blog'>
                <a>
                    <div className='marquee-container'>
                        <motion.h3
                            id='title1'
                        variants={marqVariants}
                        animate="animate"
                        initial="initial"
                        >
                            Raccontiamo Termini Imerese
                        </motion.h3>
                        <motion.h3
                            id='title2'
                        variants={marqVariants1}
                        animate="animate"
                        initial="initial"
                        >
                            Raccontiamo Termini Imerese
                        </motion.h3>
                    </div>
                </a>
            </Link>
            <Row className='justify-content-between g-0'>
                {articoli.slice(0, 4).map((articolo) => {
                    return (
                        <ArticoloCard key={articolo.sys.id} articolo={articolo} type='home' />
                    )
                })}
            </Row>
            <style jsx>
                {`
                   a {
                    text-decoration: none;
                    color: black
                   }
                   .marquee-container{
                       display: flex;
                       position: relative;
                       width: 100%;
                       overflow-x: hidden;
                   }
                   a:hover{
                       color: #fff
                   }
                   h4{
                    margin-bottom: 30px;
                    width: 20%;
                    border-left: 3px solid #FAE92B;
                    padding-left: 3px;
                    font-size: 1.8em;
                    
                }
                `}
            </style>
        </div>
    )
}