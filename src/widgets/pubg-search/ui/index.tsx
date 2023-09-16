"use client";
import { useState, useRef } from "react";
import { PubgInput } from "~shared/ui/pubg-input";
import { PopupSearchPubg } from "~shared/ui/popup-search-pubg";
import styles from "./styles.module.scss";

export const PubgSearch = () => {
  const [activePopup, setActivePopup] = useState(false);
  const refPopup = useRef<HTMLDivElement>(null);
  const refInput = useRef<HTMLInputElement>(null);

  const handleActivePopup = () => {
    setActivePopup(true);
    document.body.addEventListener("click", handleOutSideClick);
    refInput.current?.focus();
  };

  const handleClosePopup = () => {
    setActivePopup(false);
    document.body.removeEventListener("click", handleOutSideClick);
  };

  const handleOutSideClick = (event: MouseEvent) => {
    if (refPopup.current && !refPopup.current.contains(event.target as Node)) {
      handleClosePopup();
    }
  };

  return (
    <div className={styles.container}>
      <PubgInput refInput={refInput} handleActivePopup={handleActivePopup} />
      <PopupSearchPubg refPopup={refPopup} activePopup={activePopup} />
    </div>
  );
};
