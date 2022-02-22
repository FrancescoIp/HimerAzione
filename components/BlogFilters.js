import { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import { motion, AnimatePresence } from "framer-motion";
import { BsFillTriangleFill } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { ButtonGroup, ToggleButton } from 'react-bootstrap'

export default function Filters({ handleValueChange, postShowing, radioValue, tagsArray }) {

    //From the parent component we are sending "tagsArray" an array with all the Tags used in the blog post. 
    // so we create an array "uniqueTagsArray" with no duplicate tags and mapping it we create 
    // "tagRadioButtonBeta" wich is use to create the filter buttons

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    const uniqueTagsArray = tagsArray.filter(onlyUnique)
    uniqueTagsArray.unshift("Tutti")

    const tagRadioButtonBeta = uniqueTagsArray.map((tag) => {
        const tagValue = tag === 'Tutti' ? '' : tag
        return ({ name: tag, value: tagValue })
    })

    const [showFilters, setShowFilters] = useState(false)

    return (
        <Row>
            <Col xs={12}>
                <input
                    className="input-spread"
                    type="text"
                    aria-label="Search"
                    placeholder="Cerca l'articolo scrivendo qui"
                    onChange={handleValueChange}
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
                        className='blog-filter-container'
                        key='filters'
                        animate=
                        {{
                            opacity: showFilters ? 1 : 0,
                            y: showFilters ? 0 : -30
                        }}
                        initial={{ opacity: 0, y: -15 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: .5 }}

                    >
                        <ButtonGroup>
                            {tagRadioButtonBeta.map((radio, idx) => {
                                return (
                                    <ToggleButton
                                        className='blog-tags'
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"

                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(handleValueChange)}
                                    >
                                        <span>{radioValue === radio.value && <GoPrimitiveDot />} {radio.name}</span>
                                        
                                    </ToggleButton>
                                )
                            })}
                        </ButtonGroup>
                    </motion.div>
                }
            </AnimatePresence>
            <Col >
                Articoli: {postShowing}
            </Col>
        </Row>
    )
}