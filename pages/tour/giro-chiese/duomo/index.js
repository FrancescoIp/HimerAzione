import useTranslation from "next-translate/useTranslation";

export default function Duomo() {
  let { t } = useTranslation();
  return <p>Duomo Page</p>;
}
