import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function CartolinaSPace() {
  let { t } = useTranslation();
  return (
    <div className="cartolina-space-container">
      <Row>
        <Col xs={12} className="align-self-center">
          <Image
            src="/himerazionefotodigruppo.jpeg"
            width={608}
            height={456}
            layout="responsive"
          />
        </Col>
        <Col xs={12}>
          <p>{t("home:crew")}</p>
        </Col>
      </Row>
    </div>
  );
}
