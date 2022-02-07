import { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import { motion, AnimatePresence } from "framer-motion";
import { BsFillTriangleFill } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'

export default function Filters(props) {
    const [isSelected, setIsSelected] = useState(false)
    const filtersName = [
        {name: 'Tutti', selected: isSelected},
        {name: 'Chiese', selected: isSelected},
        {name: 'Musei', selected: isSelected},
        {name: 'Cultura', selected: isSelected}
    ]
    
    const [showFilters, setShowFilters] = useState(false)

    function toggleAndHandleValueCahnge() {
        console.log(isSelected)
        setIsSelected(!isSelected);

    }
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
                        className='blog-filter-container'
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
                        {filtersName.map(({name, selected}) => {
                            const filterValue = name === 'Tutti' ? null : name
                            return (
                                <button onClick={props.handleValueChange} value={filterValue}>
                                    {selected && <GoPrimitiveDot />}{name}
                                </button>
                            )
                        })}


                    </motion.div>
                }
            </AnimatePresence>
            <Col >
                Articoli: {props.postShowing}
            </Col>
        </Row>
    )
}