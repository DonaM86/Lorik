import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function SEO() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language; // "sv" eller "en"

  const title = t("seo.title");
  const description = t("seo.description");
  const keywords = t("seo.keywords");

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}
