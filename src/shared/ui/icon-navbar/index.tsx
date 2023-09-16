"use client";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./styles.module.scss";

interface IconNavBarProps {
  img: string;
  text: string;
  url: string;
  color: string;
  active: boolean;
}

export const IconNavBar = ({
  img,
  text,
  url,
  color,
  active,
}: IconNavBarProps) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (iconRef.current === null) return;
    if (!active) iconRef.current.style.backgroundColor = "";
    if (active) iconRef.current.style.backgroundColor = color;
  }, [color]);

  return (
    <div ref={iconRef} className={style.container}>
      <Link href={url}>
        <Image alt="logo" src={img} />
        <p>{text}</p>
      </Link>
    </div>
  );
};
