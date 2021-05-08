import Website from './website'
import Home from './home'
import Contact from './contact'

class Page {
    website = new Website();
    home = new Home()
    contact = new Contact()

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





