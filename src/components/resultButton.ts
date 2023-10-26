import { playersData } from "../playersData";

export const ResultButton = () => {
  const resultsButton = document.createElement('button');
  resultsButton.innerText = 'Результаты';
  resultsButton.className = 'results-button';
  resultsButton.addEventListener('click', ()=>{
    const wordsWrapper = document.querySelector('.word-wrapper');
    const resultsWrapper = document.querySelector('.results-wrapper');
    const resultsData = document.querySelector('.results__results-data');
    const checkResults = document.querySelector('.button-check');

    wordsWrapper!.classList.toggle('none');
    resultsWrapper!.classList.toggle('none');
    checkResults!.classList.toggle('none');

    resultsData!.innerHTML = "";

    for(const dataGame of playersData.entries()){
      const resultContainer = document.createElement('div');
      resultContainer.className = 'container-result';
      const numberGame = document.createElement('div');
      numberGame.innerText = `${dataGame[0]}`;

      const count = document.createElement('div');
      count.innerText = `${dataGame[1].count}`;

      const wrongAnswers = document.createElement('div');
      wrongAnswers.innerText = `${dataGame[1].wrongAnswers}`;

      resultContainer.append(numberGame,count,wrongAnswers);
      resultsData!.append(resultContainer);
    };
  });
  return resultsButton;
}
