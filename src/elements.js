import restaurant from './restaurant.jpeg';
import tooth from './tooth.svg';
import git from './git.svg';
import {info,contact} from './content';
import infoLogo from './info.svg';

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

    };
    function infoTip(content, tip){
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
        const infoContent = document.createElement('div');
        infoContent.classList.add('info-content');
        infoContent.innerHTML=content;

        const tipDiv = document.createElement('div');
        const tipLogo = new Image();
        tipLogo.src=infoLogo;
        tipLogo.classList.add('tip-logo');
        tipDiv.appendChild(tipLogo);
        tipDiv.classList.add('tip-div');
        const tipContent = document.createElement('div');
        tipContent.classList.add=('tip-content');
        tipContent.innerHTML=tip;
        tipDiv.appendChild(tipContent);
        infoDiv.appendChild(infoContent);
        infoDiv.appendChild(tipDiv);
        return infoDiv;

    }

    function menuGen(menu) {
        const container = document.querySelector('#container');
        const menuh1 = document.createElement('h1')
        menuh1.innerHTML="Our delicious food";
        container.appendChild(menuh1);
        const menuFlex = document.createElement('div');
        menuFlex.id='menu-flex';
        container.appendChild(genFunctions.infoTip(info.info, info.tip))
        container.appendChild(menuFlex);
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

    function contactGen(){
        const container = document.querySelector('#container');
        const menuh1 = document.createElement('h1')
        menuh1.innerHTML="Contact us.";
        container.appendChild(menuh1);
        container.appendChild(genFunctions.infoTip(contact.info, contact.tip));
        const formContainer = document.createElement('div');
        formContainer.id="form-container";
        const nameLine = document.createElement('div');
        nameLine.classList.add('name-line');
        const fNameBundle =document.createElement('div');
        fNameBundle.classList.add('bundle');
        const lNameBundle =document.createElement('div');
        lNameBundle.classList.add('bundle');

        const firstName = document.createElement('input');
        firstName.type="text";
        firstName.id="first-name";
        const lastName = document.createElement('input');
        lastName.type="text";
        lastName.id="last-name";
        const labelFname = document.createElement("Label");
        labelFname.setAttribute("for",firstName.id);
        labelFname.innerHTML = "First Name";
        const labelLname = document.createElement("Label");
        labelLname.setAttribute("for",lastName.id);
        labelLname.innerHTML = "Last Name";

        fNameBundle.appendChild(labelFname);
        fNameBundle.appendChild(firstName);
        nameLine.appendChild(fNameBundle);
        lNameBundle.appendChild(labelLname);
        lNameBundle.appendChild(lastName);
        nameLine.appendChild(lNameBundle);
        formContainer.appendChild(nameLine);

        const dimensionLine = document.createElement('div');
        dimensionLine.classList.add('dimension-line');
        const dimension = document.createElement('input');
        dimension.type="text";
        dimension.id="dimension"
        const dimBundle =document.createElement('div');
        dimBundle.classList.add('bundle');
        const labelDim = document.createElement("Label");
        labelDim.setAttribute("for",dimension.id);
        labelDim.innerHTML = "Dimension";
        dimBundle.appendChild(labelDim);
        dimBundle.appendChild(dimension);
        dimensionLine.appendChild(dimBundle);

        const messageLine = document.createElement('div');
        messageLine.classList.add('message-line');
        const message = document.createElement('textarea');
        message.id="message"
        const messageBundle =document.createElement('div');
        messageBundle.classList.add('bundle');
        const labelMessage = document.createElement("Label");
        labelMessage.setAttribute("for",message.id);
        labelMessage.innerHTML = "Your message";
        messageBundle.appendChild(labelMessage);
        messageBundle.appendChild(message);
        messageLine.appendChild(messageBundle);


        formContainer.appendChild(dimensionLine);
        formContainer.appendChild(messageLine);

        const send = document.createElement('div')
        send.innerHTML="SEND !";
        send.id="send";

        container.appendChild(formContainer);
        container.appendChild(send);
        let sent = false;
        send.addEventListener('click', function(){
            if(sent === false){
            send.innerHTML="<div class=\"lds-dual-ring\"></div>";
            setInterval(function(){
                send.classList.add('sent');
                send.innerHTML="";
                sent=true;
            },5000)
        }})


    }



    return {welcome, containerGen, removeContainer, navBarGen, headerGen, menuGen, footerGen,infoTip,contactGen};

})();


export {
    genFunctions
};
