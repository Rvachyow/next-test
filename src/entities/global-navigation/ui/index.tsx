"use client";
import Image from "next/image";
import { NavBarConst } from "../dto/constanst";
import { useTranslations } from "next-intl";
import { IconNavBar } from "~shared/ui/icon-navbar";
import { LanguageReplacement } from "~features/language-replacement/ui";
import { GameOnline } from "~features/game-online";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AppButton } from "~shared/ui/app-button";
import { filterNavBarConst } from "~shared/lib/filterNavBarConst";

import img from "~shared/svg/logo.svg";
import style from "./styles.module.scss";

interface IGLobalNavBar {
  bgColor: string;
  paramsToString: string;
}

export const GlobalNavigation = ({
  bgColor,
  paramsToString,
}: IGLobalNavBar) => {
  const [dataNavBar, setDataNavBar] = useState(NavBarConst);
  const t = useTranslations("NavBarGlobal");
  const refLogo = useRef<HTMLDivElement>(null);
  console.count();

  useLayoutEffect(() => {
    if (refLogo.current === null) return;
    refLogo.current.style.backgroundColor = bgColor;
  }, [bgColor]);

  useEffect(() => {
    setDataNavBar(filterNavBarConst(dataNavBar, paramsToString || "/"));
  }, [paramsToString]);

  return (
    <div className={style.navbarGlobal}>
      <div className={style.container}>
        <div className={style.mainText}>
          <div ref={refLogo} className={style.logo}>
            <Image alt="logo" src={img}></Image>
          </div>
          <div className={style.navItems}>
            {dataNavBar.map((item) => (
              <IconNavBar
                active={paramsToString === item.url}
                key={item.text}
                color={bgColor}
                {...item}
              ></IconNavBar>
            ))}
          </div>
        </div>
        <div className={style.stats}>
          <GameOnline text={t("online")} />
          <LanguageReplacement />
          <AppButton>{t("login")}</AppButton>
        </div>
      </div>
    </div>
  );
};
