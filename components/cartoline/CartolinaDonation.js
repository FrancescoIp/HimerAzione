import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";

export default function CartolinaDonation() {
  let { t } = useTranslation();
  return (
    <div className="donation-body">
      <div className="content-container">
        <div>{t("home:body1")}</div>
        <div>{t("home:body2")}</div>
        <div>{t("home:body3")}</div>
        <div>{t("home:body4")}</div>
        <motion.button
          whileHover={{
            y: 3,
            boxShadow: "0 0px 0px 0px #274a7d",
          }}
          className="donation-button"
        >
          <a href="https://www.produzionidalbasso.com/project/riattiviamo-stu-jardinu-himerazione/">
            {t("home:btn-donate")}
          </a>
        </motion.button>
      </div>
    </div>
  );
}
