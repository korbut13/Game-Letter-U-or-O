import { words } from "../words";
import { CheckButton } from "./checkButton";
import { CreateWord } from "./word";

export const WordsWrapper = () => {
  const wordsWrapper = document.createElement('div');
  wordsWrapper.className = 'word-wrapper none';
  return wordsWrapper;
}
