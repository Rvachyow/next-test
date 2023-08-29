import Image from "next/image";
import { NavBarConst } from "../dto/constanst";
import { useTranslations } from "next-intl";
import { IconNavBar } from "~shared/ui/iconNavBar/IconNavBar";
import { LanguageReplacement } from "~features/languageReplacement/ui/LanguageReplacement";
import { GameOnline } from "~features/gameOnline/GameOnline";
import { AppButton } from "~shared/ui/appButton/AppButton";
import img from "~shared/svg/logo.svg";
import style from "./GlobalNavigation.module.scss";

export const GlobalNavigation = () => {
  const t = useTranslations("NavBarGlobal");
  return (
    <div className={style.navbarGlobal}>
      <div className={style.container}>
        <div className={style.mainText}>
          <div className={style.logo}>
            <Image alt="logo" src={img}></Image>
          </div>
          <div className={style.navItems}>
            {NavBarConst.map((item) => (
              <IconNavBar {...item}></IconNavBar>
            ))}
          </div>
        </div>
        <div className={style.stats}>
          <GameOnline game={t("online")}></GameOnline>
          <LanguageReplacement />
          <AppButton>{t("login")}</AppButton>
        </div>
      </div>
    </div>
  );
};
