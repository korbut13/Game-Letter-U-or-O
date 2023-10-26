import { StartGameButton } from "./startGameButton";
import { ResultButton } from "./resultButton";

export const Menu = () => {
  const menu = document.createElement('div');
  menu.className = 'menu';
  menu.append(StartGameButton(),ResultButton());
  return menu;
}
