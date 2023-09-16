"use client";
import { Header } from "~widgets/header";
import styles from "./styles.module.scss";

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
};
