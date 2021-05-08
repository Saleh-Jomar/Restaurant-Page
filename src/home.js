class Home {

    createHome(){
        const home = document.createElement('div');
        home.classList.add('homepage');

        const img = document.createElement('img');
        img.src = 'Images/frontpage.jpg';
        img.alt = 'Random Image';

        home.append(
            this.createParagraph('This is the first line'),
            this.createParagraph('This is the second line'),
            img,
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