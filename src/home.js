class Home {

    createHome(){
        const home = document.createElement('div');
        home.classList.add('homepage');

        home.appendChild(
            this.createParagraph('This is the first line')
        );
        home.appendChild(
            this.createParagraph('This is the second line')
        );
        home.appendChild(
            this.createParagraph('This is the third line')
        );
        
        return home;
    }

    createParagraph(content) {
        const para = document.createElement('p');
        para.textContent = content;
        return para;
    }

    render(){
        const main = document.querySelector('main')
        main.textContent = '';
        main.appendChild(this.createHome());
    }
}

export default Home;