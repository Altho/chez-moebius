import './style.css';
import {genFunctions} from  './elements.js';
import {welcomeContent,menuContent} from "./content";


document.body.appendChild(genFunctions.headerGen("Chez Moebius"));
document.body.appendChild(genFunctions.navBarGen("Our restaurant", "Menu", "Contact us"));
document.body.appendChild(genFunctions.containerGen());
genFunctions.welcome(welcomeContent.title,welcomeContent.img,welcomeContent.content);
genFunctions.footerGen("MADE BY ALTHO, ON EARTH.", "https://github.com/altho");


const item1 = document.querySelector('.menu-item'+1);
const item2 = document.querySelector('.menu-item'+2);
const item3 = document.querySelector('.menu-item'+3);
item1.addEventListener('click',function(){
    genFunctions.removeContainer();
    document.body.insertBefore(genFunctions.containerGen(),document.body.lastChild);
    genFunctions.welcome(welcomeContent.title,welcomeContent.img,welcomeContent.content);

    const btnArray = document.querySelectorAll('.item');
    for(let btn of btnArray){
       btn.classList.remove('pushed');
    }
    this.classList.add('pushed');

    ;


});


item2.addEventListener('click',function(){
    genFunctions.removeContainer();
    document.body.insertBefore(genFunctions.containerGen(),document.body.lastChild);

    const btnArray = document.querySelectorAll('.item');
    for(let btn of btnArray){
        btn.classList.remove('pushed');
    }
    this.classList.add('pushed');


    genFunctions.menuGen(menuContent);

});;
item3.addEventListener('click',()=> {console.log('ok')});










