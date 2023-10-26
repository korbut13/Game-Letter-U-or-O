import { answers } from "../answers";
import { createAnswer } from "../utils/createAnswers";


export const CreateWord = (word:string) => {

  const container = document.createElement('div');
  const wordForClassName = word.replace(/\s/g, '');
  container.className = `container-word ${wordForClassName}`;
  const arr = word.split("");

  arr.forEach(letter => {
    if(letter === 'u' || letter === 'ó'){
      const missingLetter = document.createElement('input');
      missingLetter.className = 'container-missing-letter';

      missingLetter.addEventListener('input', (e:Event)=>{
        const {target} = e;
        if(target) {
          let selectLetter = (target as HTMLInputElement).value;
          createAnswer(selectLetter, word, answers);
        }
      });
      container.append(missingLetter);

    }else{
      const letterContainer = document.createElement('p');
      letterContainer.className = 'container-letter';
      letterContainer.innerText = letter;
      container.append(letterContainer);
    }

  });
  createAnswer(" ", word, answers);
  return container;
}
