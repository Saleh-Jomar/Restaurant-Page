import Website from './website'
import Home from './home'
import Contact from './contact'
import Menu from './menu'

class Page {
    website = new Website();
    home = new Home();
    contact = new Contact();
    menu = new Menu();

    Initialize() {
        this.website.render();
        this.home.render();
        const nav = document.querySelector('nav');
        nav.addEventListener('click', (e) => {
            if (e.target.tagName == 'BUTTON') {
                this[e.target.id].render();
            }
        })
    }
}

const page = new Page();
page.Initialize();





