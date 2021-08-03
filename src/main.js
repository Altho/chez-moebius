import './style.css';
import {genFunctions} from  './elements.js';

const welcomeContent = {
    title : "Welcome chez Moebius !",
    img : "restaurant.jpeg",
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
    {

        title : "Washed egg",
        img : 'egg.jpeg',
        price : 22,
        content : " Once every cycle, the humanoids of the conservative community of the infinite plain from the dimension Delta-245b-H come together. The women wear their fancy dresses and the men tress their hairs and wear a suit. They gather in the nest of the mythical Kouloukou bird and take all of their eggs except for one. The eggs are then cooked and washed thoroughly to clean them of the potent neurotoxin "

    },
    {

        title : "Explosive nems",
        img : 'nems.jpeg',
        price : 17,
        content : " The legend says that originally, the explosive nems where invented by a monarch to be given as a last meal to criminal awaiting execution. Little did they know that it was both their last meal AND their execution. The monarch was a joker."

    },
    {

        title : "Cake Snake",
        img : 'snake.jpeg',
        price : 18,
        content : " If you put an infinity of monkeys with typewriters in a room for an infinity of time you would end up with all of Shakespeare's work. Well, the same is true of anything. We generate an infinity of possibilitie until we get this treat. It is cake. But it's also snek."

    },
    {

        title : "Pain au pain",
        img : 'tartine.jpeg',
        price : 3,
        content : " This one is an acquired taste. Only for connoisseurs. Please note that this item is no longer available to go. The chef is tired of replacing his tires every week"

    },

]


document.body.appendChild(genFunctions.headerGen("Chez Moebius"));
document.body.appendChild(genFunctions.navBarGen("Our restaurant", "Menu", "Contact us"));
document.body.appendChild(genFunctions.containerGen());
genFunctions.welcome(welcomeContent.title,welcomeContent.img,welcomeContent.content);


const item1 = document.querySelector('.menu-item'+1);
const item2 = document.querySelector('.menu-item'+2);
const item3 = document.querySelector('.menu-item'+3);
item1.addEventListener('click',function(){
    genFunctions.removeContainer();
    document.body.appendChild(genFunctions.containerGen());
    genFunctions.welcome(welcomeContent.title,welcomeContent.img,welcomeContent.content);
});


item2.addEventListener('click',function(){
    genFunctions.removeContainer();
    document.body.appendChild(genFunctions.containerGen());
    genFunctions.menuGen(menuContent);
});;
item3.addEventListener('click',()=> {console.log('ok')});




// const navMenuChoice = (choice) => {
//     console.log('ok');
//     switch (choice){
//         case 0 :
//             genFunctions.containerGen();
//             genFunctions.welcome(welcomeContent.title,welcomeContent.img,welcomeContent.content);
//             break;
//         case 1 :
//             genFunctions.containerGen();
//             genFunctions.menuGen(menuContent);
//             break;
//         case 2 :
//             console.log("coming soon !");
//
//     }
//
// };




