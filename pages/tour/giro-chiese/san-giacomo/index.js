import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";

export default function SanGiacomo() {
  let { t } = useTranslation();
  return (
    <div className="tour-text-container">
      <Image
        alt="Santa Caterina"
        width="1400px"
        height="603px"
        src="/giro-chiese/s.Giacomo.jpg"
      />
      <h1>{t("san-giacomo:title")}</h1>
      <p>{t("san-giacomo:body-p1")}</p>
      <p>{t("san-giacomo:body-p2")}</p>
      <p>{t("san-giacomo:body-p3")}</p>
      <p>{t("san-giacomo:body-p4")}</p>
      <p>{t("san-giacomo:body-p5")}</p>
      <Link href="/tour/giro-chiese">
        <a>{t("san-giacomo:link-home")}</a>
      </Link>
    </div>
  );
}
