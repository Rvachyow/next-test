import Image from "next/image";
import style from "./IconNavBar.module.scss";

interface IconNavBarProps {
  img: string;
  text: string;
}

export const IconNavBar = ({ img, text }: IconNavBarProps) => {
  return (
    <div className={style.container}>
      <Image alt="logo" src={img} />
      <p>{text}</p>
    </div>
  );
};
