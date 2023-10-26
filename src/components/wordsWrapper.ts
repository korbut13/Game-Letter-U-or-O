export const WordsWrapper = () => {
  const content = document.createElement('div');
  content.className = 'container-content';

  const wordsWrapper = document.createElement('div');
  wordsWrapper.className = 'words-wrapper none';

  const gameResult = document.createElement('div');
  gameResult.className = 'game-result none';

  const countResult = document.createElement('div');
  countResult.className = 'count-result';

  const imgResult = document.createElement('img');
  imgResult.className = 'img-result';

  gameResult.append(countResult, imgResult);

  content.append(wordsWrapper,gameResult)
  return content;
}
