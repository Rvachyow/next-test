import Image from "next/image";
import { PubgSearch } from "~widgets/pubg-search/ui";
import img from "~shared/svg/imgbg.jpg";
import bigOpGG from "~shared/svg/big-opgg.png";
import styles from "./styles.module.scss";

export const PubgMain = () => {
  return (
    <main className={styles.container}>
      <div className={styles.main}>
        <Image className={styles.bg__img} alt="bg" src={img} />
        <div className={styles.logo}>
          <Image className={styles.bigLogo} alt="bg" src={bigOpGG} />
          <h2>Analytics Inspire Better Gaming</h2>
        </div>
        <PubgSearch />
      </div>
    </main>
  );
};
