import { useTranslations } from "next-intl";
import style from "./styles.module.scss";
export const HeaderLoader = () => {
  const t = useTranslations("NavBarGlobal");
  return <div className={style.spiner}>{t("loading")}</div>;
};
