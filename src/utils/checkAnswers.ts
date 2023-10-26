import { answers } from "../answers";
import { playersData } from "../playersData";

export const checkAnswers = () => {
  const gamesAmount:number[] = Array.from(playersData.keys());
  let currentGameNumber = 1;
  let count = 0;
  const wrongAnswers:string[] = [];

  if(gamesAmount.length > 0){
    let lastGameNumber:number = gamesAmount.sort((a,b) => b-a)[0];
    currentGameNumber = ++lastGameNumber;
  };

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

  playersData.set(currentGameNumber, {count, wrongAnswers});
}
