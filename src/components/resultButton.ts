
export const ResultButton = () => {
  const resultsButton = document.createElement('button');
  resultsButton.innerText = 'Результаты';
  resultsButton.className = 'results-button';
  resultsButton.addEventListener('click', ()=>{
    const wordsWrapper = document.querySelector('.word-wrapper');
    const resultsWrapper = document.querySelector('.results-wrapper');

    wordsWrapper!.classList.toggle('none');
    resultsWrapper!.classList.toggle('none');
  });
  return resultsButton;
}
