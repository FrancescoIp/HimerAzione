import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

export default function CartolinaSPace() {
    return (
        <div className='cartolina-space-container'>
            <Row>
                <Col xs={7} className='align-self-center'>
                    <Image
                        src='/space1.png'
                        width={608}
                        height={456}
                        layout='responsive'
                    />
                </Col>
                <Col xs={5}>
                    <p>HimerAzione, verso l'infinito e oltre!!</p>
                    <span className='source-link'>
                        Illustration by
                        <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">
                            Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
                    </span>
                </Col>
            </Row>
        </div>
    )
}