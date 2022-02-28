import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

export default function CartolinaSPace() {
    return (
        <div className='cartolina-space-container'>
            <Row>
                <Col xs={12} className='align-self-center'>
                    <Image
                        src='/himerazionefotodigruppo.jpeg'
                        width={608}
                        height={456}
                        layout='responsive'
                    />
                </Col>
                <Col xs={12} >
                    <p>Ecco la banda, ma ne manca qualcuno!</p>
                </Col>
            </Row>
        </div>
    )
}