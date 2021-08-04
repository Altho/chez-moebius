import restaurant from './restaurant.jpeg';
import tooth from './tooth.svg';
import git from './git.svg';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    console.log(images);
    return images;
}


const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


const genFunctions = (() => {
    const navMenuChoice = (choice) => {
        console.log('ok');

    };
    const welcome = (title, image, content) => {
        // const container = document.querySelector('#container');
        // document.body.removeChild(container);
        // const containerCreate = document.createElement('div');
        // containerCreate.id = "container";
        // document.body.appendChild(containerCreate);

        const titleRestaurant = document.createElement('H1');
        titleRestaurant.innerHTML = title;
        container.appendChild(titleRestaurant)
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-div');
        const RestaurantImg = new Image();
        RestaurantImg.src = restaurant;
        imgDiv.appendChild(RestaurantImg);
        container.appendChild(imgDiv);
        const contentRestaurant = document.createElement('div');
        contentRestaurant.classList.add('content');
        contentRestaurant.innerHTML = content;
        container.appendChild(contentRestaurant);
        const signature = document.createElement('p');
        signature.id = "signature";
        signature.innerHTML = "Come on down, chez Moebius !"
        container.appendChild(signature);
    };

    function headerGen(title) {
        const header = document.createElement('header');
        header.id = "header";

        const headerTitle = document.createElement('h1');
        headerTitle.innerHTML = title;
        header.appendChild(headerTitle);


        return header;
    };
    function removeContainer() {
        const container = document.querySelector('#container');
        document.body.removeChild(container);
    };

    function navBarGen(...items) {
        console.log(items);
        const navBar = document.createElement('nav');
        navBar.id = "navbar";
        let menuList = document.createElement('ul');
        let concat = 1;
        for (let i = 0; i < items.length; i++) {
            const listElement = document.createElement('li');
            listElement.classList.add('item');
            listElement.classList.add('menu-item'+concat);
            concat++;
            listElement.innerHTML = items[i];
            menuList.appendChild(listElement);

        }
        concat = 1;
        navBar.appendChild(menuList);
        return navBar;

    };

    function containerGen() {
        const container = document.createElement('div');
        container.id = "container";
        return container;



    };
    function footerGen(credit,link){
        const footer = document.createElement('div');
        footer.id='footer';
        const creditLine = document.createElement('div');
        creditLine.classList.add('credit');
        creditLine.innerHTML=credit;
        footer.appendChild(creditLine);
        const logoA = document.createElement('a');
        logoA.href=link;
        const gitLogo = new Image();
        gitLogo.classList.add('git-logo');
        gitLogo.src=git;
        logoA.appendChild(gitLogo);
        footer.appendChild(logoA);
        document.body.appendChild(footer);

    }

    function menuGen(menu) {
        const container = document.querySelector('#container');
        const menuFlex = document.createElement('div');
        menuFlex.id='menu-flex';
        container.appendChild(menuFlex);
        let imgValue;
        for (let i = 0; i < menu.length; i++) {

            const card = document.createElement('div');
            card.classList.add('card');
            const cardtitle = document.createElement('div');
            cardtitle.classList.add('card-title')
            cardtitle.innerHTML = menu[i].title;
            card.appendChild(cardtitle);
            const cardImg = document.createElement('img');
            const test = Object.keys(images)[i];
            console.log(menu[i].img)
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img-div');

            for (const property in images) {
                if (property == menu[i].img) {


                    cardImg.src = (images[property]);
                    imgDiv.appendChild(cardImg);
                    card.appendChild(imgDiv);


                }


            }


            const cardPrice = document.createElement('div');
            const toothIcon = new Image();
            toothIcon.src = tooth;
            cardPrice.classList.add('card-price');
            cardPrice.innerHTML=menu[i].price;
            cardPrice.appendChild(toothIcon);
            card.appendChild(cardPrice);
            const cardContent = document.createElement('div');
            cardContent.classList.add('card-content');
            cardContent.innerHTML=menu[i].content;
            card.appendChild(cardContent);
            menuFlex.appendChild(card);


        }

    }



    return {welcome, containerGen, removeContainer, navBarGen, headerGen, menuGen, navMenuChoice,footerGen};

})();


export {
    genFunctions
};
