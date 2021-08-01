import './style.css';
import {headerGen, navBarGen,containerGen,restaurantPageGen} from  './elements.js';

const welcomeContent = {
    title : "Welcome Chez Moëbius !",
    img : "./restaurant.jpeg",
    content : "Ideally located at the multiverse cornerstone, experience fine dining in a restaurant overlooking not more than 32 dimensions ! We provide sustenance to most carbon-based lives, extra-dimensional beings and ethereal entities.Please note that Chez Moëbius has 5 time dimensions, time traveling is not advised and we decline all responsibilty for any potential injury (becoming the void, being turned inside out, experiencing dimension 0 or absorbing every conscioussness and becoming a mad god. "


}


document.body.appendChild(headerGen());
document.body.appendChild(navBarGen("Our restaurant", "Menu", "Contact us"));
document.body.appendChild(containerGen());
restaurantPageGen(welcomeContent.title,welcomeContent.img,welcomeContent.content);

