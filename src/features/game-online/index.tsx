"use client";
import { memo, useEffect } from "react";
import { useStore, useEvent } from "effector-react";
import { useTranslations } from "next-intl";
import { $online, getOnline } from "~entities/online-pubg/model";

import style from "./styles.module.scss";

interface IGameOnliceProps {
  text: string;
}

export const GameOnline = memo(({ text }: IGameOnliceProps) => {
  const online = useStore($online);
  const fetchEvent = useEvent(getOnline);
  const isLoading = useStore(getOnline.pending);
  const t = useTranslations("NavBarGlobal");

  useEffect(() => {
    fetchEvent();
    const interval = setInterval(() => {
      fetchEvent();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container}>
      <span>{text}:</span>
      {isLoading ? <p>{t("loading")}</p> : <p>{online}</p>}
    </div>
  );
});
