import './style.css';
import { words } from './words';
import { CreateWord } from './components/word';
import { CheckButton } from './components/checkButton';
import { Results } from './components/results';
import { StartGameButton } from './components/startGameButton';
import { ResultButton } from './components/resultButton';
import { Menu } from './components/menu';
import { WordsWrapper } from './components/wordsWrapper';
import { MainImage } from './components/main-image';


const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

wrapper.append(Menu(), MainImage(), WordsWrapper(), Results(), CheckButton());

document.body.append(wrapper)
