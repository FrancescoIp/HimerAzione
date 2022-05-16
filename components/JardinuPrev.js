import React, { useState, useEffect } from "react";
import ShowMoreText from "react-show-more-text";
import ButtonB from "./buttons/customButtonB";
import { useMediaQuery } from "react-responsive";
import useTranslation from "next-translate/useTranslation";

export default function JardinuPrev() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const [isDesktop, setisDesktop] = useState(null);

  useEffect(() => {
    setisDesktop(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);
  const ciao = "TEST";

  let { t } = useTranslation();

  return (
    <div className="jardinu-container">
      <div id="progetti" className="jardinu-prev-body">
        <div>
          <h3>{t("home:jardinu")}</h3>
        </div>
        <div>
          <ShowMoreText
            lines={isDesktop ? 2 : 8}
            more={t("home:showMore")}
            less={t("home:showLess")}
            className="jardinu-text"
            anchorClass=""
            expanded={false}
            width={0}
            truncatedEndingComponent={"... "}
          >
            <p>{t("home:jardinu1")} </p>
            <a
              href="https://www.produzionidalbasso.com/project/riattiviamo-stu-jardinu-himerazione/"
              target="_blank"
              title="produzionidalbasso/jardinu"
            >
              {t("home:jardinu2")}
            </a>{" "}
            <p> {t("home:jardinu3")}</p>
            <p>{t("home:jardinu4")}</p>
            <p>{t("home:jardinu5")}</p>
            <p> {t("home:jardinu6")}</p>
            <p>{t("home:jardinu7")}</p>
            <p>{t("home:jardinu8")}</p>
          </ShowMoreText>
        </div>
        <div>
          <ButtonB
            className="btn-jardinu"
            title={t("home:jardinu9-btn")}
            href="https://www.produzionidalbasso.com/project/riattiviamo-stu-jardinu-himerazione/"
          ></ButtonB>
        </div>
      </div>
    </div>
  );
}
