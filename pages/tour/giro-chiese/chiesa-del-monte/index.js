import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";

export default function ChiesaDelMonte() {
  let { t } = useTranslation();
  return (
    <div className="tour-text-container">
      <Image
        alt="Chiesa Del Monte"
        width="1400px"
        height="803px"
        src="/giro-chiese/chiesaMonte.jpg"
      />
      <h1>{t("chiesa-del-monte:title")}</h1>
      <p>{t("chiesa-del-monte:body-p1")}</p>
      <p>{t("chiesa-del-monte:body-p2")}</p>
      <p>{t("chiesa-del-monte:body-p3")}</p>
      <p>{t("chiesa-del-monte:footer")}</p>
      <Link href="/tour/giro-chiese">
        <a>{t("chiesa-del-monte:link-home")}</a>
      </Link>
    </div>
  );
}
