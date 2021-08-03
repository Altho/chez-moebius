import restaurant from './restaurant.jpeg';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

console.log(images);

const genFunctions = (() => {
    const welcome = (title, image, content) => {
        const titleRestaurant = document.createElement('H1');
        titleRestaurant.innerHTML = title;
        const container = document.querySelector('#container');
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

    function navBarGen(...items) {
        console.log(items);
        const navBar = document.createElement('nav');
        navBar.id = "navbar";
        let menuList = document.createElement('ul');

        for (let i = 0; i < items.length; i++) {
            const listElement = document.createElement('li');
            console.log(items[i]);
            listElement.innerHTML = items[i];
            menuList.appendChild(listElement);
            menuList.addEventListener('click', genFunctions.menuGen);

        }
        navBar.appendChild(menuList);
        return navBar;

    };

    function containerGen() {
        const container = document.createElement('div');
        container.id = "container";
        return container;

    };

    function menuGen(menu){
        const container = document.querySelector('#container');
        for (let item of menu){
            const card = document.createElement('div');
            card.classList.add('.card');
            const cardtitle = document.createElement('div');
            cardtitle.classList.add('card-title')
            cardtitle.innerHTML=item.title;
            const cardImg = document.createElement('img');
            cardImg.src= images[‘item.img’];
            console.log(cardImg.src);
        }
    }

    function removeContainer() {
        const container = document.querySelector('#container');
        document.body.removeChild(container);
    }

    return {welcome, containerGen,removeContainer,navBarGen,headerGen, menuGen};

})();



export {
    genFunctions
};
