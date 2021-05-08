class Contact{
    createContact(){
        const contact = document.createElement('div');
        contact.classList.add('contactpage');

        const location = document.createElement('img');
        location.src = 'Images/map.jpeg';
        location.alt = 'Location';

        contact.append(
            this.createParagraph(
                'Phone: 012 345 6789'
            ),
            this.createParagraph(
                'Address: National Capital Region, Philippines'
            ),
            location
        );

        return contact;

    }

    createParagraph(content) {
        const para = document.createElement('p');
        para.textContent = content;
        return para;
    }


    render(){
        const main = document.querySelector('main')
        main.textContent = '';
        main.appendChild(this.createContact());
    }
}

export default Contact;