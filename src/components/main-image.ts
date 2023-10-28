import img1 from '../accets/1.jpg';
import img2 from '../accets/2.jpg';
import img3 from '../accets/czekam_na_twoj_ruch_0.jpg';
import img4 from '../accets/dzien_dobry_milego_dnia_zycze_9.jpg';
import img5 from '../accets/pozdrawiam_poczestuj_sie_0.jpg';

export const MainImage = () => {
  const images = [img1, img2, img3, img4,img5];
  const randomNumber = Math.floor(Math.random() * 5);
  console.log("random", randomNumber)
  const imgContainer = document.createElement('div');
  imgContainer.className = 'container-image';
  const img = document.createElement('img');
  img.className = 'main-image';
  img.src = images[randomNumber];
  imgContainer.append(img)
  return imgContainer;
}
