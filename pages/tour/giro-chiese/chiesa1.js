import useTranslation from "next-translate/useTranslation";

export default function Chiesa1() {
  let { t } = useTranslation();
  return <h1>{t("home-giro-chiese:header")}</h1>;
}
