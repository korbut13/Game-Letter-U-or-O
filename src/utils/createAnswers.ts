import { answers } from "../answers";

export const createAnswer = (letter:string, word:string) => {
  const answer = word
    .replace('u', letter)
    .replace('ó', letter);
  answers[word] = answer;
}
