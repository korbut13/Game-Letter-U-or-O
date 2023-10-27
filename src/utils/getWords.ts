import { rules } from "../words";

export function getWords(){
  const results = [];

  for(let key in rules){
    const words = rules[key as keyof typeof rules];

    if(words.length <=5 ){
      const selectedWords = (words.sort(() => Math.random() - 0.5)).slice(0,2);
      results.push(...selectedWords);
    }else if(words.length > 5 && words.length <=10){
      const selectedWords = (words.sort(() => Math.random() - 0.5)).slice(0,3);
      results.push(...selectedWords);
    }else if(words.length > 10){
      const selectedWords = (words.sort(() => Math.random() - 0.5)).slice(0,4);
      results.push(...selectedWords);
    }
  }
  return results.sort(() => Math.random() - 0.5);
}
