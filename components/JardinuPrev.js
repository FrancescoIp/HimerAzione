import ButtonA from "./buttons/customButtonA"
import ButtonB from "./buttons/customButtonB"
import { Row, Col } from "react-bootstrap"

export default function JardinuPrev() {

    return (
        <div className="jardinu-container">
            <Row id="progetti" className='jardinu-prev-body'>
                <Col xs={12}>
                    <h3>Attiviamo stu jardinu</h3>
                </Col>
                <Col xs={12}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </Col>
                <Col>
                    <ButtonB
                        className="btn-jardinu"
                        title="vai al jardinu!"
                        href="https://www.produzionidalbasso.com/project/riattiviamo-stu-jardinu-himerazione/">
                    </ButtonB>
                    <ButtonA className="btn-jardinu" title="Il resto" href="/cosa-facciamo"></ButtonA>
                </Col>
            </Row>
        </div>

    )

}