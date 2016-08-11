// use Objects to insert something instead of using an array to find the item

var data = {
  index: {
    "joeb": {name: "joe", surname: "bloggs", age: 29},
    "marys": {name: "mary", surname: "smith", age:25}
  },
  get: function(username) {
    return this.index(username);
  }
};

console.log(data.get("joeb"));