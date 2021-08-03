import './style.css';
import {genFunctions} from  './elements.js';

const welcomeContent = {
    title : "Welcome chez Moebius !",
    img : "./restaurant.jpeg",
    content : "Ideally located at the multiverse cornerstone, experience fine dining in a restaurant overlooking not less than 32 dimensions ! We provide sustenance to most carbon-based lives, extra-dimensional beings and ethereal entities.Please note that Chez Moëbius is built on top 5 time dimensions, time traveling is not advised. We decline all responsibilty for any potential injury (becoming the void, being turned inside out, experiencing dimension 0 or absorbing every conscioussness and becoming a mad god. For parties starting at ∞+1 please make sure to call us ahead so me can make the required arrangements. Please note that we only accept STC (Standard tooth currency)"


}


document.body.appendChild(genFunctions.headerGen("Chez Moebius"));
document.body.appendChild(genFunctions.navBarGen("Our restaurant", "Menu", "Contact us"));
document.body.appendChild(genFunctions.containerGen());
document.body.appendChild(genFunctions.welcome(welcomeContent.title,welcomeContent.img,welcomeContent.content));


