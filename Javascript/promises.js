


function loadItems(items, callback) {
  return new Promise((resolve, reject) => {
    let item = new Item()

    item.onload = function() {
      resolve(item);
    }

    item.onerror = function() {
      let message = 'Could not load item';
      reject(new Error(msg));
    }

    item.src = items;
  })
}

export default loadItems



