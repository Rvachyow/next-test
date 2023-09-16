import { PanelItem } from "../panel-item";
import styles from "./styles.module.scss";

interface IPopup {
  activePopup: boolean;
  refPopup: any;
}

export const PopupSearchPubg = ({ activePopup, refPopup }: IPopup) => {
  if (!activePopup) return;

  return (
    <div ref={refPopup} className={styles.popup}>
      <div className={styles.btns}>
        <button>Последний поиск</button>
        <button>Избранные</button>
      </div>
      <div className={styles.panel}>
        <PanelItem text={"sdfsdf"}></PanelItem>
        <PanelItem text={"sdfsdf"}></PanelItem>
        <PanelItem text={"sdfsdf"}></PanelItem>
        <PanelItem text={"sdfsdf"}></PanelItem>
        <PanelItem text={"sdfsdf"}></PanelItem>
        <PanelItem text={"sdfsdf"}></PanelItem>
        <PanelItem text={"sdfsdf"}></PanelItem>
      </div>
    </div>
  );
};
