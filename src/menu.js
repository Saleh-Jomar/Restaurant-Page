class Menu {
    menu = []

    createMenu() {
        const menu = document.createElement('div')
        menu.classList.add('menupage')
    }

    createItem(Item){
        const itemContainer = document.createElement('div');

        const menuItem = document.createElement('h2');
        menuItem.textContent = Item;

        const menuItemDisplay = document.createElement('img');
        menuItemDisplay.src = `Images/${Item.toLowerCase()}.jpg`

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