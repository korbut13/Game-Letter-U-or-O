import { words } from "../words";
import { CreateWord } from "./word";
import { playersData } from "../playersData";

export const StartGameButton = () => {
  const startButton = document.createElement('button');
  startButton.innerText = 'Старт';
  startButton.className = 'start-button';
  startButton.addEventListener('click', ()=>{
    const wordsWrapper = document.querySelector('.word-wrapper');
    wordsWrapper!.innerHTML = "";
    words.sort(() => Math.random() - 0.5);
    words.forEach(el => {
      wordsWrapper!.append(CreateWord(el));
    })
    const resultsWrapper = document.querySelector('.results-wrapper');
    const mainImage = document.querySelector('.container-image');
    const checkResults = document.querySelector('.button-check');

    mainImage!.classList.add('none');
    resultsWrapper?.classList.add('none');
    wordsWrapper!.classList.remove('none');
    checkResults?.classList.remove('none');
  });
  return startButton;
}
