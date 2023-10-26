import { StartGameButton } from "./startGameButton";
import { ResultButton } from "./resultButton";
import { BackButton } from "./BackButton";

export const Menu = () => {
  const menu = document.createElement('div');
  menu.className = 'menu';
  menu.append(BackButton(), StartGameButton(),ResultButton());
  return menu;
}
