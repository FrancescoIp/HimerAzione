import { useState, useEffect } from "react";
import VisitCount from "../components/VisitCount";
import CartolineHome from "../components/cartoline/Cartoline";
import JardinuPrev from "../components/JardinuPrev";
import MDA from "../components/MangiaDormiAma";
import BlogPrev from "../components/BlogPrev";
import ArticoliEvidenza from "../components/ArticoliEvidenza";
import { createClient } from "contentful";
import useTranslation from "next-translate/useTranslation";

export async function getStaticProps({ locale }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blogPost", locale });

  return {
    props: {
      articoli: res.items,
    },
    revalidate: 10,
  };
}

export default function Home({ articoli }) {
  let { t } = useTranslation();

  return (
    <div className="homeBG">
      <CartolineHome />

      <JardinuPrev />

      <ArticoliEvidenza articoli={articoli} />

      <MDA />

      <BlogPrev articoli={articoli} />
    </div>
  );
}
