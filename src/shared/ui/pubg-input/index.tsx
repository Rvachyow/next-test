import Image from "next/image";
import img from "../../svg/btn.png";
import styles from "./styles.module.scss";

interface IPubgInput {
  handleActivePopup: () => void;
  refInput: any;
}

export const PubgInput = ({ handleActivePopup, refInput }: IPubgInput) => {
  return (
    <div onClick={handleActivePopup} className={styles.input}>
      <input
        ref={refInput}
        placeholder="Введите логин в Батлграундс."
        type="text"
      />
      <button>
        <Image alt="btn" src={img} />
      </button>
    </div>
  );
};
