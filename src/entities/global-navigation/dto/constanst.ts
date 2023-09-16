import { INavBar } from "./types";
import pubg from "~shared/svg/pubgLogo.svg";
import lol from "~shared/svg/lolLogo.svg";

export const NavBarConst: INavBar[] = [
  {
    img: pubg,
    text: "PUBG",
    url: "/",
  },
  {
    img: lol,
    text: "League of Legends",
    url: "/leagueoflegends",
  },
];
