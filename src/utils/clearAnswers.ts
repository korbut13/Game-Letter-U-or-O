import { answers } from "../answers";
export function clearAnswers(){
  for(let key in answers){
    delete answers[key as keyof typeof answers]
  }
}
