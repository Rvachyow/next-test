"use client";
import { useEffect, useRef, useState } from "react";
import { LockalNavItem } from "~shared/ui/lockal-nav-item";
import style from "./styles.module.scss";
import { LockalBarConstants } from "../dto/constant";

interface ILockalNavigation {
  bgColor: string;
  paramsToString: string;
}

export const LockalNavigation = ({ bgColor, paramsToString }: ILockalNavigation) => {
  const navBarRef = useRef<HTMLDivElement>(null);
  const [currentTarget, setCurrentTarget] = useState("");

  useEffect(() => {
    if (navBarRef.current === null) return;
    navBarRef.current.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div ref={navBarRef} className={style.navbarLockal}>
      <nav className={style.container}>
        <ul>
          {LockalBarConstants.map((item, index) => (
            <LockalNavItem
              key={index}
              active={currentTarget === item.text}
              {...item}
              setCurrentTarget={setCurrentTarget}
            ></LockalNavItem>
          ))}
        </ul>
      </nav>
    </div>
  );
};
