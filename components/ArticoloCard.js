import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import useTranslation from "next-translate/useTranslation";

export default function ArticoloCard({ articolo, type }) {
  const { title, slug, immagineCopertina, publishedDate, tags } =
    articolo.fields;
  const columnDimension = type == "home" ? 5 : 8;
  const biggerText =
    type == "home" ? "text-container biggerText" : "text-container";
  let { t } = useTranslation();

  return (
    <Col xs={12} md={columnDimension} className="card-container mb-5">
      <Link href={"/blog/" + slug}>
        <a>
          <Row>
            <Col className="image-card-container p-6" xs={5}>
              <Image
                src={"https:" + immagineCopertina.fields.file.url}
                width={140}
                height={210}
                layout="responsive"
                id="BlogPrevCardImg"
              />
            </Col>
            {/* biggerText will always have 'text-container' class in it */}
            <Col className={biggerText}>
              <p>Pubblicato il: {dayjs(publishedDate).format("DD-MM-YYYY")}</p>
              <h4>{title}</h4>
              {/* the second p is positioned at the bottom of the blog-card */}
              <p>Tag: {tags}</p>
            </Col>
          </Row>
        </a>
      </Link>
    </Col>
  );
}

export function EventoProgettoCard({ articolo, type }) {
  const styleBlogVariations =
    type == "blog"
      ? {
          class: "card-container-evidenza mb-5 width-blog",
          col: 12,
          id: "BlogPrevCardImg-big",
        }
      : {
          class: "card-container-evidenza mb-5 ",
          col: 5,
          id: "BlogPrevCardImg",
        };

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const [isDesktop, setisDesktop] = useState(null);

  useEffect(() => {
    setisDesktop(isDesktopOrLaptop);
  }, [isDesktopOrLaptop]);

  const { title, slug, immagineCopertina } = articolo.fields;

  return (
    <Col
      as={motion.div}
      whileHover={{
        y: 3,
        boxShadow: "0 0px 0px 0px rgba(255, 142, 93, 1)",
        transition: {
          duration: 0.2,
        },
      }}
      style={{ boxShadow: " 2px 5px #274a7d" }}
      key={slug}
      className={styleBlogVariations.class}
    >
      <Link href={"/blog/" + slug}>
        <a>
          <Row>
            <Col
              className="image-card-container p-6 "
              xs={styleBlogVariations.col}
            >
              <Image
                src={"https:" + immagineCopertina.fields.file.url}
                width={640}
                height={isDesktop ? 200 : 800}
                layout="responsive"
                id={styleBlogVariations.id}
              />
            </Col>
            <Col className="text-container-evidenza">
              <h4>{title}</h4>
            </Col>
          </Row>
        </a>
      </Link>
    </Col>
  );
}
