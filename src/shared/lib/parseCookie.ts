export const fullVersionCountry = (short: string): string => {
  const objLanguage = {
    en: "English",
    ru: "Русский",
    jp: "日本語",
  };
  //@ts-ignore
  if (short in objLanguage) return objLanguage[short];
  return "";
};
