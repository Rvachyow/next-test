import { INavBar } from "~entities/global-navigation/dto/types";

export const convertString = (STR: string) => {
  let strParse = STR.split("/");
  if (strParse[strParse.length - 1].length > 2) {
    return "/" + strParse[strParse.length - 1];
  } else return "/";
};

export const filterNavBarConst = (arr: INavBar[], params: string) => {
  let newStr = convertString(params);

  const newArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let firstItem = arr[0];
    if (arr[i].url === newStr) {
      newArr[0] = arr[i];
      newArr[i] = firstItem;
    }
  }
  return newArr;
};
