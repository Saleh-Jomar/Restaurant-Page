class Menu {
    menu = ['Try1','Try2','Try3','Try4','Try5','Try6']

    createMenu() {
        const menu = document.createElement('div')
        menu.classList.add('menupage')

        for (let i=0; i<this.menu.length; i++){
            menu.appendChild(this.createItem((this.menu)[i]))
        }
        
        return menu;
    }

    createItem(Item){
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('menuItem');

        const menuItem = document.createElement('h2');
        menuItem.textContent = Item;

        const menuItemDisplay = document.createElement('img');
        menuItemDisplay.src = `Images/try1.jpg`

        itemContainer.append(menuItem,menuItemDisplay);

        return itemContainer
    }
    
    render(){
        const main = document.querySelector('main')
        main.textContent = '';
        main.appendChild(this.createMenu());
    }
}

export default Menu;