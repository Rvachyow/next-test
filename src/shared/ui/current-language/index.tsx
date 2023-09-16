"use client";
import { useState, useEffect } from "react";
import style from "./styles.module.scss";
import { useParams } from "next/navigation";
import { fullVersionCountry } from "~shared/lib/parseCookie";

const CurrentLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("");
  const params = useParams();

  useEffect(() => {
    if (params?.locale == undefined) return
     setCurrentLanguage(fullVersionCountry(params?.locale as string));
  }, [params]);

  return (
    <div className={style.currentLanguage}>
      <p className={style.text}>{currentLanguage}</p>
      <div className={style.triangle}></div>
    </div>
  );
};

export default CurrentLanguage;
