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
        
        const home = this.createButton('Home');
        const menu = this.createButton('Menu');
        const contact = this.createButton('Contact');
        
        home.classList.add('active');

        nav.append(home,menu,contact);

        nav.addEventListener('click',(e)=>{
            for (let i = 0; i<3; i++){
                if (nav.children[i].classList.contains('active')){
                    nav.children[i].classList.remove('active');
                }
            }   
            e.target.classList.add('active');
        })

        return nav;
    }
    
    createButton(id){
        const button = document.createElement('button');
        button.textContent = id;
        button.id = id;
        button.classList.add(id);
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

export default Website;