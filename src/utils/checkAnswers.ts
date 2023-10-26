import { answers } from "../answers";
import { playersData } from "../playersData";
import { saveResult } from "./saveResult";

export const checkAnswers = () => {
  const gamesAmount:number[] = Array.from(playersData.keys());
  let count = 0;
  const wrongAnswers:string[] = [];

  for(let key in answers){
    const className = key.replace(/\s/g, '');
    if(answers[key as keyof typeof answers] === key){
      const rightAnswer = document.querySelector(`.${className}`);
      rightAnswer!.classList.remove('wrong-answer');
      count++;
    }else{
      const wrongAnswer = document.querySelector(`.${className}`);
      const prevClassName = wrongAnswer!.classList.value;
      wrongAnswer!.className = `${prevClassName} wrong-answer`;
      wrongAnswers.push(answers[key as keyof typeof answers]);
    }
  };
  saveResult(count, wrongAnswers);
}
