import Image from "next/dist/client/image";
import useTranslation from "next-translate/useTranslation";

export default function Polaroid() {
  let { t } = useTranslation();

  return (
    <div className="polaroid-body">
      <div id="polaroid-image-frame">
        <Image
          alt="Annunziata - Termini Imerese"
          width="1200px"
          height="800px"
          src="/cupolaAnnunziata.jpg"
          priority
        />
      </div>

      <h1>{t("home:polaroid")}</h1>
    </div>
  );
}
