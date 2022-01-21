import { BiBed, BiBeenHere, BiRestaurant } from "react-icons/bi";
import { BsCircleFill } from 'react-icons/bs'
import { Row, Col, Container } from 'react-bootstrap'
import ButtonA from "./buttons/customButtonA";

function WichIcon({ icon }) {
    if (icon == 'BiRestaurant') {
        return <BiRestaurant />;
    } else if (icon == 'BiBed') {
        return <BiBed />;
    } else if (icon == 'BiBeenHere') {
        return <BiBeenHere />
    }

}

function MDACard1({ type, icon, text, buttonText, buttonClass }) {
    const BGcolor = type === 'A' ? 'colorA' : 'colorB';
    const btnClass = buttonClass ? buttonClass : ''

    return (
        <div id={BGcolor} className="MDACard-container">
            <Row className="justify-content-center" >
                <Col className="justify-content-center d-flex" xs={6}>
                    <div className="circle-icon">
                        <WichIcon icon={icon} />
                    </div>
                </Col>
            </Row>
            <p>{text}</p>
            <ButtonA className={btnClass} title={buttonText} href="/servizi" />
        </div>
    )
}

export default function MDA() {
    return (
        <Row className="justify-content-center g-0" id="MDA-container">
            <Col xs={11} md={3}>
                <MDACard1 
                type='A' 
                icon='BiRestaurant'
                text="Per te una lista di dove puoi gustare fantastici cibi a Termini"
                buttonClass='btn-MDACArd1 btn-MDACard1__color-shadow'
                buttonText='Mangia'
                >
                </MDACard1>
            </Col>
            <Col xs={11} md={3} >
                <MDACard1 
                icon='BiBed'
                text='Stanco per aver visitato tropper meraviglie? Ecco dove Riposare'
                buttonText='Dormi'
                buttonClass='btn-MDACArd1'
                >
                </MDACard1>
            </Col>
            <Col xs={11} md={3}>
                <MDACard1 
                type='A' 
                icon='BiBeenHere'
                text='Scopri le meraviglie nascoste di Termini Imerese'
                buttonText='Ama'
                buttonClass='btn-MDACArd1 btn-MDACard1__color-shadow'
                >
                </MDACard1>
            </Col>
        </Row>

    )
}