import restaurant from './restaurant.jpeg';



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
            menuList.addEventListener('click', genFunctions.removeContainer);

        }
        navBar.appendChild(menuList);
        return navBar;

    };

    function containerGen() {
        const container = document.createElement('div');
        container.id = "container";
        return container;

    };

    function removeContainer() {
        const container = document.querySelector('#container');
        document.body.removeChild(container);
    }

    return {welcome, containerGen,removeContainer,navBarGen,headerGen};

})();



export {
    genFunctions
};
