class Contact{
    createContact(){
        const contact = document.createElement('div')
        contact.classList.add('contactpage');

        contact.appendChild(
            this.createParagraph(
                'Phone: 09453320290'
            )
        )

        contact.appendChild(
            this.createParagraph(
                'Address: 31 Lawaan Street Tatalon Quezon City'
            )
        )

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