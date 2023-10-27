import { saveResult } from "./saveResult";
import { createGameResult } from "./createGameResult";
import { answers } from "../answers";

export const checkAnswers = () => {
  let count = 0;

  const wrongAnswers:string[] = [];

  for(let key in answers){
    const className = key.replace(/\s/g, '');
    if(answers[key as keyof typeof answers] === key){
      const rightAnswer = document.querySelector(`.${className}`);
      rightAnswer?.classList.remove('wrong-answer');
      count++;
    }else{
      const wrongAnswer = document.querySelector(`.${className}`);
      wrongAnswer?.classList.add('wrong-answer');
      wrongAnswers.push(key);
    }
  };

  const result = createGameResult(count);

  const gameResult = document.querySelector('.game-result');
  const countResult = document.querySelector('.count-result');
  const imgResult = <HTMLImageElement>document.querySelector('.img-result');

  gameResult?.classList.remove('none');
  countResult!.innerHTML = `Твой результат ${result.count}`;
  imgResult.src = result.img;
  const sound = new Audio(result.audio);
  sound.play();

  saveResult(count, wrongAnswers);
}
