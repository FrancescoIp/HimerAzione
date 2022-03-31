import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";

export default function MariaAnnunziata() {
  let { t } = useTranslation();
  return (
    <div className="tour-text-container">
      <Image
        alt="Chiesa Del Monte"
        width="1400px"
        height="803px"
        src="/giro-chiese/Annunziata.jpg"
      />
      <h1>{t("maria-annunziata:title")}</h1>
      <p>{t("maria-annunziata:body-p1")}</p>
      <p>{t("maria-annunziata:body-p2")}</p>
      <p>{t("maria-annunziata:body-p3")}</p>
      <p>{t("maria-annunziata:body-p4")}</p>
      <p>{t("maria-annunziata:body-p5")}</p>
      <p>{t("maria-annunziata:body-p6")}</p>
      <p>{t("maria-annunziata:footer")}</p>
      <Link href="/tour/giro-chiese">
        <a>{t("maria-annunziata:link-home")}</a>
      </Link>
    </div>
  );
}
