class Storage{
    constructor(arr) {
        this.items = arr;
    }
    getItems(){
        return this.items;
    }
    addItem(itemName){
        this.items.push(itemName);
    }
    removeItem(itemName){
        this.items = this.items.filter(item => item !== itemName);
    }
} 
const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
   
  const items = storage.getItems();
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]




// const Storage = function (arr) {
//     this.items = arr; 
// }

// Storage.prototype.getItems = function() {
//     return this.items
// }

// Storage.prototype.addItem = function(itemName) {
//      this.items.push(itemName)
// }

// Storage.prototype.removeItem = function(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
// }


// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//   ]);
   
//   const items = storage.getItems();
//   console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
//   storage.addItem('Дроид');
//   console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
//   storage.removeItem('Пролонгер');
//   console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]