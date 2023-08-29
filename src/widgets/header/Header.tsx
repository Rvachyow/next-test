import { GlobalNavigation } from "~entities/globalNavigation/ui";
import { LockalNavigation } from "~entities/lockalNavigation/ui";

import style from "./Header.module.scss";
export const Header = () => {
  return (
    <header className={style.header}>
      <GlobalNavigation />
      <LockalNavigation />
    </header>
  );
};
