


function  headerGen() {

const header = document.createElement('header');
header.id="header";
header.innerHTML ="This is the header"

return header;
};

function navBarGen(...items)  {
    console.log(items);
    const navBar = document.createElement('nav');
    navBar.id="navbar";
    let menuList = document.createElement('ul');

    for(let item of items){
        const listElement = document.createElement('li');
        console.log(item);
        listElement.innerHTML=item;
        menuList.appendChild(listElement);

    }
    navBar.appendChild(menuList);
    return navBar;

}

function containerGen(){
    const container = document.createElement('div');
    container.id="container";
    return container;

}

function restaurantPageGen(title,image,content){
    const titleRestaurant = document.createElement('H1');
    titleRestaurant.innerHTML=title;
    const container = document.querySelector('#container');
    container.appendChild(titleRestaurant)
    const imgRestaurant = document.createElement('img');
    imgRestaurant.src=image;
    container.appendChild(imgRestaurant);
    const contentRestaurant = document.createElement('div');
    contentRestaurant.id="content-restaurant";
    contentRestaurant.innerHTML=content;
    container.appendChild(contentRestaurant);
    return titleRestaurant, contentRestaurant;
}

export {
    headerGen,navBarGen,containerGen,restaurantPageGen
};
