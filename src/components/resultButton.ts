export const ResultButton = () => {
  const resultsButton = document.createElement('button');
  resultsButton.innerText = 'Результаты';
  resultsButton.className = 'results-button';
  resultsButton.addEventListener('click', ()=>{
    const wordsWrapper = document.querySelector('.word-wrapper');
    const resultsWrapper = document.querySelector('.results-wrapper');
    const resultsData = document.querySelector('.results__results-data');
    const checkResults = document.querySelector('.button-check');
    const backButton = document.querySelector('.button-back');

    wordsWrapper!.classList.toggle('none');
    resultsWrapper!.classList.toggle('none');
    checkResults!.classList.toggle('none');
    backButton!.classList.remove('none');

    resultsData!.innerHTML = "";
    const results = localStorage.getItem('results');
    if(results){
      const sortedResults = JSON.parse(results).sort((a:{count:number},b:{count:number}) => b.count - a.count);

      for(let i=0; i < sortedResults.length; i++){

        const resultContainer = document.createElement('div');
        resultContainer.className = 'container-result';

        const numberGame = document.createElement('div');
        const numberOfGame = i + 1;
        numberGame.innerText = `${numberOfGame}`;

        const count = document.createElement('div');
        count.innerText = `${sortedResults[i].count}`;

        const wrongAnswers = document.createElement('div');
        wrongAnswers.className = 'results__wrong-answers';
        wrongAnswers.innerText = `${sortedResults[i].wrongAnswers}`;

        resultContainer.append(numberGame,count,wrongAnswers);
        resultsData!.append(resultContainer);
      };
    }

  });
  return resultsButton;
}
