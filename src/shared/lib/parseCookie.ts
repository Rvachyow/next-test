export const ParseCookie = (cookie: string, full?: boolean): string => {
  console.log(cookie);
  const objLanguage = {
    en: "English",
    ru: "Русский",
  };
  let arras = cookie.split(";");
  let parse = arras[1].split("=");
  console.log(parse[1]);
  if (full) return objLanguage[parse[1]];
  return parse[1];
};
