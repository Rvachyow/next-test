import style from "./GameOnline.module.scss";

interface IGameOnliceProps {
  game: string;
}

export const GameOnline = ({ game }: IGameOnliceProps) => {
  return (
    <div className={style.container}>
      <p>{game}</p>
    </div>
  );
};
