import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";

export default function Duomo() {
  let { t } = useTranslation();
  return (
    <div className="tour-text-container">
      <Image
        alt="Chiesa Del Monte"
        width="703px"
        height="1050px"
        src="/giro-chiese/matrice.jpg"
      />
      <h1>{t("duomo:title")}</h1>
      <p>{t("duomo:body-p1")}</p>
      <h2>{t("duomo:title-p2")}</h2>
      <p>{t("duomo:body-p2")}</p>
      <h2>{t("duomo:title-p3")}</h2>
      <p>{t("duomo:body-p3")}</p>
      <h2>{t("duomo:title-p4")}</h2>
      <p>{t("duomo:body-p4")}</p>
      <h2>{t("duomo:title-p5")}</h2>
      <p>{t("duomo:body-p5")}</p>
      <p>{t("duomo:body-p6")}</p>
      <p>{t("duomo:body-p7")}</p>
      <p>{t("duomo:body-p8")}</p>
      <p>{t("duomo:body-p9")}</p>
      <h2>{t("duomo:title-p10")}</h2>
      <p>{t("duomo:body-p10")}</p>
      <p>{t("duomo:body-p11")}</p>
      <p>{t("duomo:body-p12")}</p>
      <p>{t("duomo:body-p13")}</p>
      <p>{t("duomo:body-p14")}</p>
      <p>{t("duomo:body-p15")}</p>
      <h2>{t("duomo:title-p16")}</h2>
      <p>{t("duomo:body-p16")}</p>
      <p>{t("duomo:body-p17")}</p>
      <p>{t("duomo:body-p18")}</p>
      <p>{t("duomo:body-p19")}</p>
      <p>{t("duomo:body-p20")}</p>
      <p>{t("duomo:body-p21")}</p>
      <p>{t("duomo:footer")}</p>
      <p style={{ textAlign: "center" }}>{t("duomo:title-bio")}</p>
      <p>{t("duomo:biografia")}</p>
      <Link href="/tour/giro-chiese">
        <a>{t("duomo:link-home")}</a>
      </Link>
    </div>
  );
}
