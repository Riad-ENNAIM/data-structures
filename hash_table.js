class HashTable {
  constructor(size) {
    this.values = {};
    this.size = size;
  }

  check(key, hash) {
    return this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key);
  }

  add(key, value) {
    const hash = this.genHash(key)

    // Initialize this portion of table
    // if it has not yet been defined
    if(!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }

    this.values[hash][key] = value;
  }

  remove(key) {
    const hash = this.genHash(key);

    if(this.check(key, hash)) {
      delete this.values[hash][key];
    }
  }

  genHash(key) {
      var keyStr = key.toString();
      var sum = 0;

      // Sum ASCII values of all chars in keyStr
      for(let i = 0; i < keyStr.length; i++) {
        sum += keyStr.charCodeAt(i);
      }

      // Ensures index is in range of array
      return sum % this.size;
  }

  getValue(key) {
    const hash = this.genHash(key);

    if(this.check(key, hash))
      return this.values[hash][key];
    else
      return undefined;
  }

  printAll() {
    for(const val in this.values) {
      for(const key in this.values[val]) {
        console.log("{", key, ", ", this.values[val][key], "}");
      }
    }
  }
}

const hashTable = new HashTable(7);

hashTable.add("key1", "value1");
hashTable.add("key2", "value2");
hashTable.add("key3", "value3");

console.log("Print Hash Table:");
hashTable.printAll();

console.log(`value of key2: `, hashTable.getValue("key2"));

console.log(`delete key2`);
hashTable.remove("key2");

console.log("Print Hash Table:");
hashTable.printAll();

console.log(`value of key2: `, hashTable.getValue("key2"));

console.log(`delete key1`);
hashTable.remove("key1");

console.log("Print Hash Table:");
hashTable.printAll();