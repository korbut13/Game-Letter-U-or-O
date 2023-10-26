import { checkAnswers } from "../utils/checkAnswers";

export const CheckButton = () => {
  const checkButton = document.createElement('button');
  checkButton.innerText = 'Проверь';
  checkButton.className = 'button-check';
  checkButton.addEventListener('click', checkAnswers);

  return checkButton;
}
