import style from "./AppButton.module.scss";

interface AppButtonProps {
  children: string;
}

export const AppButton = ({ children }: AppButtonProps) => {
  return <button className={style.appButton}>{children}</button>;
};
