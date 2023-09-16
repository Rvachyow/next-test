import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { convertString } from "~shared/lib/filterNavBarConst";
import { GlobalNavigation } from "~entities/global-navigation";
import { LockalNavigation } from "~entities/lockal-navigation";
import style from "./styles.module.scss";

export const Header = () => {
  const params = usePathname();
  const [color, setColor] = useState("");
  const [paramsToString, setParamsToString] = useState(
    convertString(params || "")
  );

  useEffect(() => {
    setParamsToString(convertString(params || ""));
    if (convertString(params || "") === "/") setColor("#c9760e");
    if (convertString(params || "") === "/leagueoflegends") setColor("#5383e8");
  }, [params]);

  return (
    <header className={style.header}>
      <GlobalNavigation bgColor={color} paramsToString={paramsToString} />
      <LockalNavigation bgColor={color} paramsToString={paramsToString} />
    </header>
  );
};
