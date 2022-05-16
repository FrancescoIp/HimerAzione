import useTranslation from "next-translate/useTranslation";

export default function VisitCount({ viewCount }) {
  let { t } = useTranslation();

  return (
    <div className="count-view-container">
      <p>
        {t("home:count")} {viewCount.value} {t("home:count1")}
      </p>
    </div>
  );
}
