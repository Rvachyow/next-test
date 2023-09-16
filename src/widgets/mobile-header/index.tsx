import { LockalNavigation } from "~entities/lockal-navigation";
import styles from "./styles.module.scss";

interface IHeader {
  globalNavBgColor: string;
  lockalNavBgColor: string;
}

export const MobileHeader = ({
  globalNavBgColor,
  lockalNavBgColor,
}: IHeader) => {
  return (
    <div className={styles.headerMobile}>
      <div className={styles.globalNavigation}>
        GameOnline
      </div>
      <LockalNavigation bgColor={lockalNavBgColor} />
    </div>
  );
};
