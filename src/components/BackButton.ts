export const BackButton = () => {
  const backButton = document.createElement('button');
  backButton.innerText = 'Назад';
  backButton.className = 'button-back none';
  backButton.addEventListener('click', ()=>{
    const wordsWrapper = document.querySelector('.words-wrapper');
    const resultsWrapper = document.querySelector('.results-wrapper');
    const checkResults = document.querySelector('.button-check');

    resultsWrapper!.classList.add('none');
    wordsWrapper!.classList.remove('none');
    checkResults!.classList.remove('none');
    backButton.classList.add('none');
  });

  return backButton;
}
