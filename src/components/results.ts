import { playersData } from "../playersData";

export const Results = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'results-wrapper none';

  const headerOfResults = document.createElement('div');
  headerOfResults.className = 'results__header';

  const gameNumber = document.createElement('div');
  gameNumber.className = 'results__headers_number';
  gameNumber.innerText = 'Game';

  const gameCount = document.createElement('div');
  gameCount.className = 'results__headers_count';
  gameCount.innerText = 'Count';

  const gameWrongAnswers = document.createElement('div');
  gameWrongAnswers.className = 'results__headers_wrong-answers';
  gameWrongAnswers.innerText = 'Wrong Answers';

  const resultsData = document.createElement('div');
  resultsData.className = 'results__results-data';

  headerOfResults.append(gameNumber, gameCount, gameWrongAnswers);
  wrapper.append(headerOfResults,resultsData);
  return wrapper;
}
