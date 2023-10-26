import { playersData } from "../playersData";

export const Results = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'results-wrapper none';

  for(let key in playersData){

    const resultContainer = document.createElement('div');
    resultContainer.className = 'container-result';
    const number = document.createElement('div');
    number.innerText = key;

    const count = document.createElement('div');
    count.innerText = `${playersData[key].count}`;

    const wrongAnswers = document.createElement('div');
    wrongAnswers.innerText = `${playersData[key].wrongAnswers}`;

    resultContainer.append(number,count,wrongAnswers);
    wrapper.append(resultContainer);
  };
  return wrapper;
}
