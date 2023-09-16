import { PubgMain } from "~widgets/pubg-main/ui";
import style from "./styles.module.scss";

export const PubgLayout = () => {
  return (
    <div className={style.pubg}>
      <PubgMain />
    </div>
  );
};
