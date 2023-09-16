import { useTranslations } from "next-intl";
import clsx from "clsx";
import style from "./styles.module.scss";

interface ILockal {
  text: string;
  active: boolean;
  setCurrentTarget: (arg: string) => void;
}

export const LockalNavItem = ({ text, active, setCurrentTarget }: ILockal) => {
  const t = useTranslations("NavBarLockal");

  const handleActive = () => {
    setCurrentTarget(text);
  };
  return (
    <li
      onClick={handleActive}
      className={clsx(style.lockal, { [style.active]: active })}
    >
      {t(text)}
    </li>
  );
};
