import { CreateWord } from "./word";
import startSound from '../accets/gameStart.mp3';
import { clearAnswers } from "../utils/clearAnswers";
import { getWords } from "../utils/getWords";

export const StartGameButton = () => {
  const startButton = document.createElement('button');
  startButton.innerText = 'Старт';
  startButton.className = 'start-button';

  startButton.addEventListener('click', ()=>{
    const startAudio = new Audio(startSound);
    startAudio.play();

    const wordsWrapper = document.querySelector('.words-wrapper');
    wordsWrapper!.innerHTML = "";

    clearAnswers();
    const selectedWords = getWords();
    selectedWords.forEach(el => {
      wordsWrapper!.append(CreateWord(el));
    })
    const resultsWrapper = document.querySelector('.results-wrapper');
    const mainImage = document.querySelector('.container-image');
    const checkResults = document.querySelector('.button-check');
    const backButton = document.querySelector('.button-back');
    const gameResult = document.querySelector('.game-result');

    mainImage!.classList.add('none');
    resultsWrapper?.classList.add('none');
    wordsWrapper!.classList.remove('none');
    checkResults?.classList.remove('none');
    backButton?.classList.add('none');
    gameResult?.classList.add('none')
  });
  return startButton;
}
