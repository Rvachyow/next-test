"use client";
import Image from "next/image";
import Link from "next-intl/link";
import { memo, useRef, useState } from "react";
import { SwapLanguageMenuConstant } from "../dto/constants";
import dynamic from "next/dynamic";
import style from "./styles.module.scss";
import imgEarth from "~shared/svg/earth.svg";
import { HeaderLoader } from "~shared/ui/header-loader";
import { useParams } from "next/navigation";

const CurrentLanguage = dynamic(() => import("~shared/ui/current-language"), {
  loading: () => <HeaderLoader />,
  ssr: false,
});

export const LanguageReplacement = memo(() => {
  const [statusMenu, setStatusMenu] = useState(false);
  const params = useParams();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleActiveMenu = () => {
    setStatusMenu((prev) => !prev);
    document.body.addEventListener("click", handleOutSideClick);
  };
  const handleCloseMenu = () => {
    setStatusMenu(false);
    document.body.removeEventListener("click", handleOutSideClick);
  };

  const handleOutSideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      handleCloseMenu();
    }
  };

  const filterCurrentConstant = SwapLanguageMenuConstant.filter(
    (item) => item.type !== params?.locale
  );

  return (
    <div ref={menuRef} onClick={handleActiveMenu} className={style.container}>
      <Image alt="logoEarth" src={imgEarth}></Image>
      <CurrentLanguage />
      {statusMenu && (
        <div className={style.languageMenu}>
          <ul className={style.languageMenu__block}>
            {filterCurrentConstant.map((item) => (
              <Link key={item.type} href="/" locale={item.type}>
                <li className={style.languageMenu__item}>{item.language}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
