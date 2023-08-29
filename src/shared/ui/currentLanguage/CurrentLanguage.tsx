"use client";
import { useState, useEffect, memo } from "react";
import { ParseCookie } from "~shared/lib/parseCookie";

const CurrentLanguage = memo(({ statusMenu }: { statusMenu: boolean }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  useEffect(() => {
    setCurrentLanguage(ParseCookie(document.cookie, true));
  }, [statusMenu]);
  return (
    <div>
      <p>{currentLanguage}</p>
    </div>
  );
});

export default CurrentLanguage;
