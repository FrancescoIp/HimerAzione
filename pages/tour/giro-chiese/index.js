import useTranslation from "next-translate/useTranslation";
import { Row, Col, Card } from "react-bootstrap";
import Image from "next/dist/client/image";
import ButtonA from "../../../components/buttons/customButtonA";

export default function GiroChiese() {
  let { t } = useTranslation();
  return (
    <div className="giro-chiese-container">
      <Row className="d-flex justify-content-center">
        <Col xs={12} className="text-center mb-3">
          <h1>{t("home-giro-chiese:header")}</h1>
        </Col>
        <Col
          xs={12}
          md={5}
          className="d-flex justify-content-center mb-5 text-center"
        >
          <Card className="card-tour-chiese">
            <Image
              alt="Santa Caterina"
              width="1200px"
              height="803px"
              src="/giro-chiese/s.caterina.jpg"
            />
            <Card.Body>
              <Card.Title>
                <h3>{t("home-giro-chiese:title1")}</h3>
              </Card.Title>
              <ButtonA
                className="button-text"
                title="Inizia il Tour"
                href="/tour/giro-chiese/santa-caterina"
              >
                Go somewhere
              </ButtonA>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          md={5}
          className="d-flex justify-content-center mb-5 text-center"
        >
          <Card className="card-tour-chiese">
            <Image
              alt="Chiesa Del Monte"
              width="1200px"
              height="803px"
              src="/giro-chiese/chiesaMonte.jpg"
            />
            <Card.Body>
              <Card.Title>
                <h3>{t("home-giro-chiese:title2")}</h3>
              </Card.Title>
              <ButtonA
                className="button-text"
                title="Inizia il Tour"
                href="/tour/giro-chiese/chiesa-del-monte"
              >
                Go somewhere
              </ButtonA>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          md={5}
          className="d-flex justify-content-center mb-5 text-center"
        >
          <Card className="card-tour-chiese">
            <Image
              alt="Annunziata - Termini Imerese"
              width="1200px"
              height="803px"
              src="/giro-chiese/Annunziata.jpg"
            />
            <Card.Body>
              <Card.Title>
                <h3>{t("home-giro-chiese:title3")}</h3>
              </Card.Title>
              <ButtonA
                className="button-text"
                title="Inizia il Tour"
                href="/tour/giro-chiese/maria-annunziata"
              >
                Go somewhere
              </ButtonA>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          md={5}
          className="d-flex justify-content-center mb-5 text-center"
        >
          <Card className="card-tour-chiese">
            <Image
              alt="Chiesa San Giacomo"
              width="1200px"
              height="803px"
              src="/giro-chiese/s.Giacomo.jpg"
            />
            <Card.Body>
              <Card.Title>
                <h3>{t("home-giro-chiese:title4")}</h3>
              </Card.Title>
              <ButtonA
                className="button-text"
                title="Inizia il Tour"
                href="/tour/giro-chiese/san-giacomo"
              >
                Go somewhere
              </ButtonA>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          md={5}
          className="d-flex justify-content-center mb-5 text-center"
        >
          <Card className="card-tour-chiese">
            <Image
              alt="Annunziata - Termini Imerese"
              width="800px"
              height="903px"
              src="/giro-chiese/matrice.jpg"
            />
            <Card.Body>
              <Card.Title>
                <h3>{t("home-giro-chiese:title5")}</h3>
              </Card.Title>
              <ButtonA
                className="button-text"
                title="Inizia il Tour"
                href="/tour/giro-chiese/duomo"
              >
                Go somewhere
              </ButtonA>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
