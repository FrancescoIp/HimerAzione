import { BiBed, BiBeenHere, BiRestaurant } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
import ButtonA from "./buttons/customButtonA";
import useTranslation from "next-translate/useTranslation";

export default function MDA() {
  let { t } = useTranslation();
  return (
    <Row className="justify-content-center" id="MDA-container">
      <Col xs={12} md={3} className="MDACard-container colorA">
        <div className="circle-icon">
          <BiRestaurant size={38} />
        </div>
        <div className="text-btn-container">
          <p>{t("home:mangia")}</p>
          <ButtonA
            className="btn-MDACArd1 btn-MDACard1__color-shadow"
            title={t("home:mangia-btn")}
            href="/servizi"
          />
        </div>
      </Col>
      <Col xs={12} md={3} className="MDACard-container colorB">
        <div className="circle-icon">
          <BiBed size={38} />
        </div>
        <div className="text-btn-container">
          <p>{t("home:dormi")}</p>
          <ButtonA
            className="btn-MDACArd1 btn-MDACard1__color-shadow"
            title={t("home:dormi-btn")}
            href="/servizi"
          />
        </div>
      </Col>
      <Col xs={12} md={3} className="MDACard-container colorA">
        <div className="circle-icon">
          <BiBeenHere size={38} />
        </div>
        <div className="text-btn-container">
          <p>{t("home:ama")}</p>
          <ButtonA
            className="btn-MDACArd1 btn-MDACard1__color-shadow"
            title={t("home:ama-btn")}
            href="/servizi"
          />
        </div>
      </Col>
    </Row>
  );
}
