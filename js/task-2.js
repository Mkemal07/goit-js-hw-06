class Storage{
  #items;

  constructor(valueItems) {
    this.#items = valueItems;
  }
  getItems(){
    return this.#items;
  }
  addItem(newItem){
    this.#items.push(newItem);
  }
  removeItem(itemRemove){
    this.#items = this.#items.filter((item) => item !== itemRemove);
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]