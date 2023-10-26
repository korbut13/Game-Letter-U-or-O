import { answers } from "../answers";

export const checkAnswers = () => {
  let count = 0;

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
    }
  };
}
