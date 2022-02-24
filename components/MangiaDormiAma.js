import { BiBed, BiBeenHere, BiRestaurant } from "react-icons/bi";
import { Row, Col } from 'react-bootstrap'
import ButtonA from "./buttons/customButtonA";


export default function MDA() {
    return (
        <Row className="justify-content-center" id="MDA-container">
            <Col xs={12} md={3} className="MDACard-container colorA">
                <div className="circle-icon">
                    <BiRestaurant size={38} />
                </div>
                <div className="text-btn-container">
                    <p>Il buon cibo a Termini Imerese è di casa!</p>
                    <ButtonA
                        className='btn-MDACArd1 btn-MDACard1__color-shadow'
                        title="Mangia"
                        href="/servizi"
                    />
                </div>
            </Col>
            <Col xs={12} md={3} className="MDACard-container colorB">
                <div className="circle-icon">
                    <BiBed size={38} />
                </div>
                <div className="text-btn-container">
                    <p>Hotels e B&B sono pronti ad ospitarti!</p>
                    <ButtonA
                        className='btn-MDACArd1 btn-MDACard1__color-shadow'
                        title="Dormi"
                        href="/servizi"
                    />
                </div>
            </Col>
            <Col xs={12} md={3} className="MDACard-container colorA">
                <div className="circle-icon">
                    <BiBeenHere size={38} />
                </div>
                <div className="text-btn-container">
                    <p>Esplora le meraviglie di Termini Imerese!</p>
                    <ButtonA
                        className='btn-MDACArd1 btn-MDACard1__color-shadow'
                        title="Ama"
                        href="/servizi"
                    />
                </div>
            </Col>
        </Row>



    )
}