import { words } from "../words";
import { WordsWrapper } from "./wordsWrapper";
export const StartGameButton = () => {
  const startButton = document.createElement('button');
  startButton.innerText = 'Старт';
  startButton.className = 'start-button';
  startButton.addEventListener('click', ()=>{
    words.sort(() => Math.random() - 0.5);
    WordsWrapper()
    console.log(words)
    const wordsWrapper = document.querySelector('.word-wrapper');
    const resultsWrapper = document.querySelector('.results-wrapper');
    const mainImage = document.querySelector('.container-image');
    mainImage!.classList.add('none');
    resultsWrapper?.classList.add('none');
    wordsWrapper!.classList.remove('none');
  });
  return startButton;
}
