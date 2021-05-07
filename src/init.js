class Website{
    
    createHeader(){
        const header = document.createElement('header');
        header.classList.add('header');
    
        const restaurantName = document.createElement('h1')
        restaurantName.classList.add('Restaurant-Name')
        restaurantName.textContent = 'Try'
    
        header.append(restaurantName,this.createNav());
    
        return header;
    }
    
    createNav(){
        const nav  = document.createElement('nav');
        nav.classList.add('nav');
    
        nav.appendChild(this.createButton('Home'));
        nav.appendChild(this.createButton('Menu'));
        nav.appendChild(this.createButton('Contact'));
    
        return nav;
    }
    
    createButton(id){
        const button = document.createElement('button');
        button.textContent = id;
        button.id = id;
        
        return button;
    
    }
    
    createMain(){
        const main = document.createElement('main');
        main.classList.add('main');
    
        return main;
    }
    
    createFooter(){
    
    }
    
    initialize(){
        const content = document.getElementById('content');
        content.append(this.createHeader(),this.createMain());
    }

}
function initialize(){
    const website = new Website();
    website.initialize();
}

export default initialize;