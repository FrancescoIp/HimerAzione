import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";

export default function SantaCaterina() {
  let { t } = useTranslation();
  return (
    <div className="tour-text-container">
      <Image
        alt="Santa Caterina"
        width="1400px"
        height="603px"
        src="/giro-chiese/s.caterina.jpg"
      />
      <h1>{t("santa-caterina:title")}</h1>
      <p>{t("santa-caterina:body-p1")}</p>
      <p>{t("santa-caterina:body-p2")}</p>
      <p>{t("santa-caterina:body-p3")}</p>
      <p>{t("santa-caterina:body-p4")}</p>
      <p>{t("santa-caterina:footer")}</p>
      <Link href="/tour/giro-chiese">
        <a>{t("santa-caterina:link-home")}</a>
      </Link>
    </div>
  );
}
