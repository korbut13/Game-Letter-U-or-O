import { GameData } from "../playersData";

export function saveResult(count:number, wrongAnswers:string[]){
  const resultsDataString = localStorage.getItem('results');

  if(resultsDataString){
    const results:GameData[] = JSON.parse(resultsDataString);
    if(results.length >= 5){
      const worstResult = results.sort((a,b) => b.count - a.count)[4];
      if(count > worstResult.count){
        results.pop();
        results.push({count, wrongAnswers});
      }
    }else{
      results.push({count, wrongAnswers});
    }
    localStorage.setItem('results', JSON.stringify(results));
  }else{
    localStorage.setItem('results', JSON.stringify([{count, wrongAnswers}]));
  }
}
