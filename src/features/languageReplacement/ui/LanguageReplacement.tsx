"use client";
import Image from "next/image";
import Link from "next-intl/link";
import { useState } from "react";
import { SwapLanguageMenuConstant } from "../dto/constants";
import dynamic from "next/dynamic";
import style from "./LanguageReplacement.module.scss";
import imgEarth from "~shared/svg/earth.svg";
import { ParseCookie } from "~shared/lib/parseCookie";
import { HeaderLoader } from "~shared/ui/headerLoader/HeaderLoader";

const CurrentLanguage = dynamic(
  () => import("~shared/ui/currentLanguage/CurrentLanguage"),
  {
    loading: () => <HeaderLoader />,
    ssr: false,
  }
);

export const LanguageReplacement = () => {
  const [statusMenu, setStatusMenu] = useState(false);
  const handleActiveMenu = () => {
    setStatusMenu((prev) => !prev);
  };
  const filterCurrentConstant = SwapLanguageMenuConstant.filter(
    (item) => item.type !== ParseCookie(document.cookie)
  );

  return (
    <div onClick={handleActiveMenu} className={style.container}>
      <Image alt="logoEarth" src={imgEarth}></Image>
      <CurrentLanguage statusMenu={statusMenu} />
      {statusMenu && (
        <div className={style.languageMenu}>
          <ul className={style.languageMenu__block}>
            {filterCurrentConstant.map((item) => (
              <Link href="/" locale={item.type}>
                <li className={style.languageMenu__item}>{item.language}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
