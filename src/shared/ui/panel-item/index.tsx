import svgDel from "../../svg/del-svg.svg";
import svgStar from "../../svg/star-svg.svg"
import Image from "next/image";
import styles from "./styles.module.scss";

export const PanelItem = ({ text }: { text: string }) => {
  return (
    <div className={styles.container}>
      <p className={styles.nickName}>{text}</p>
      <div className={styles.icons}>
        <Image alt="del" src={svgDel} />
        <Image alt="del" src={svgStar} />
      </div>
    </div>
  );
};
