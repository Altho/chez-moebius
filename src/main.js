import './style.css';
import {genFunctions} from  './elements.js';

const welcomeContent = {
    title : "Welcome chez Moebius !",
    img : "./restaurant.jpeg",
    content : "Ideally located at the multiverse cornerstone, experience fine dining in a restaurant overlooking not less than 32 dimensions ! We provide sustenance to most carbon-based lives, extra-dimensional beings and ethereal entities.Please note that Chez Moëbius is built on top 5 time dimensions, time traveling is not advised. We decline all responsibilty for any potential injury (becoming the void, being turned inside out, experiencing dimension 0 or absorbing every conscioussness and becoming a mad god. For parties starting at ∞+1 please make sure to call us ahead so me can make the required arrangements. Please note that we only accept STC (Standard tooth currency)"


}

const menuContent = [{
    title : "Disco Burger",
    img : 'disco.jpeg',
    price : 12,
    content : " As you bite, you can taste the party ! the  disco comes, you're young, the future is bright. The air as never smelt so good. You can achieve anything ! As you swallow your last bite, darkness swallows you. Your past is irrelevant, their is no future. Nothing but the void (Free on your birthday !)"

},
    {
        title : "Ocean-sickle",
        img : 'dolphin.jpeg',
        price : 8,
        content : " A best seller ! After growing ocean planets in a pocket dimension we then miniaturize it an put it on a stick ! (Marine life content may vary)"

    },{

    title : "Eye candy",
    img : 'eye.jpeg',
    price : 5,
    content : " Every time you order one, we gather another one. Somewhere. From someone"

},

]

genFunctions.menuGen(menuContent);
document.body.appendChild(genFunctions.headerGen("Chez Moebius"));
document.body.appendChild(genFunctions.navBarGen("Our restaurant", "Menu", "Contact us"));
document.body.appendChild(genFunctions.containerGen());
genFunctions.welcome(welcomeContent.title,welcomeContent.img,welcomeContent.content);


