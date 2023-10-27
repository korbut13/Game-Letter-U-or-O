import img1 from '../accets/winner.jpg';
import img2 from '../accets/bravo.jpg';
import img3 from '../accets/probuj.jpg';
import audio1 from '../accets/goodresult-82807.mp3'
import audio2 from '../accets/winner.mp3';
import audio3 from '../accets/negative_beeps-6008.mp3';

export function createGameResult(count:number){
  const result:{count:number, img:string, audio:string} = {} as {count:number, img:string, audio:string};
  if(count === 28){
    result.img=img1;
    result.audio = audio1;
  }else if(count > 10 && count < 28){
    result.img=img2;
    result.audio = audio2;
  }else{
    result.img=img3;
    result.audio = audio3;
  }
  result.count = count;
  return result;
}
