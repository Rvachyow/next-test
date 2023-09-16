import { memo } from "react";
import style from "./styles.module.scss";

interface AppButtonProps {
  children: string;
}

export const AppButton = memo(({ children }: AppButtonProps) => {
  return <button className={style.appButton}>{children}</button>;
});
