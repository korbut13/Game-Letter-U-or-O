export const createAnswer = (letter:string, word:string, answers:{[key:string]:string}) => {
  const answer = word
    .replace('u', letter)
    .replace('ó', letter);
  answers[word] = answer;
}
