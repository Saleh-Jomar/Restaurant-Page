class Website{
    
    createHeader(){
        const header = document.createElement('header');
    
        const restaurantName = document.createElement('h1')
        restaurantName.classList.add('Restaurant-Name')
        restaurantName.textContent = 'Try'
    
        header.append(restaurantName,this.createNav());
    
        return header;
    }
    
    createNav(){
        const nav  = document.createElement('nav');
        
        const home = this.createButton('home');
        const menu = this.createButton('menu');
        const contact = this.createButton('contact');
        
        home.classList.add('active');

        nav.append(home,menu,contact);

        nav.addEventListener('click',(e)=>{
            if (e.target.tagName=='BUTTON'){
                for (let i = 0; i<3; i++){
                    if (nav.children[i].classList.contains('active')){
                        nav.children[i].classList.remove('active');
                    }
                }
                
                e.target.classList.add('active');
            }
        })

        return nav;
    }
    
    createButton(id){
        const button = document.createElement('button');
        button.textContent = id[0].toUpperCase() + id.slice(1);
        button.id = id;
        return button;
    
    }
    
    createMain(){
        const main = document.createElement('main');

        return main;
    }
    
    createFooter(){
        const footer = document.createElement('footer')
        return footer;
    }
    
    render(){
        const content = document.getElementById('content');
        content.append(this.createHeader(),this.createMain(),this.createFooter());
    }

}

export default Website;