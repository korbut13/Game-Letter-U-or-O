import { answers } from "../answers";
import { playersData } from "../playersData";
import { saveResult } from "./saveResult";
import myAudio from '../accets/winner.mp3';

export const checkAnswers = () => {
  const sound = new Audio(myAudio);
  sound.play();
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
      wrongAnswer?.classList.add('wrong-answer');
      wrongAnswers.push(key);
    }
  };
  saveResult(count, wrongAnswers);
}
