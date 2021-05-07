function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1')
    restaurantName.classList.add('Restaurant-Name')
    restaurantName.textContent = 'Try'

    header.append(restaurantName,createNav());

    return header;
}

function createNav(){
    const nav  = document.createElement('nav');
    nav.classList.add('nav');

    nav.appendChild(createButton('Home'));
    nav.appendChild(createButton('Menu'));
    nav.appendChild(createButton('Contact'));

    return nav;
}

function createButton(id){
    button = document.createElement('button');
    button.textContent = id;
    button.id = id;
    
    return button;

}

function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function createFooter(){

}

function initWebsite(){
    const content = document.getElementById('content');

    content.append(createHeader(),createMain());
}

initWebsite()