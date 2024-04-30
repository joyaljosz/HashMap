class HashMap {
    constructor(initialCapacity = 16) {
      this.buckets = new Array(initialCapacity); 
      this.size = 0; 
      this.loadFactor = 0.75;
    }
  
    //creating hashcode
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
      return hashCode % this.buckets.length;
    }
  
    //set(key, value) function

    set(key, value) {
      let index = this.hash(key);
      let originalIndex = index;
      let bucket = this.buckets;
      if (this.size / this.buckets.length >= this.loadFactor) {
        this.buckets = [...bucket, ...new Array(this.buckets.length)];
      }
  
      if (this.buckets[index] === undefined) {
        this.buckets[index] = { key, value };
        this.size++;
        return;
      }
  
      while (this.buckets[index] !== undefined) {
        index = (index + 1) % this.buckets.length;
        if (this.buckets[index] === undefined) {
          this.buckets[index] = { key, value };
          this.size++;
          return;
        }
        if (index === originalIndex) {
          return; 
        }
      }
    }
  
    //get(key) takes one argument as a key and returns the value that is assigned to this key.

    get(key) {
      let index = this.hash(key);
      let originalIndex = index;
      while (this.buckets[index] !== undefined) {
        if (this.buckets[index].key === key) {
          return `The Value for "${key}" is: ${this.buckets[index].value}`;
        }
        index = (index + 1) % this.buckets.length;
        if (index === originalIndex) {
          return;
        }
      }
      return null;
    }
  
    //has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.

    has(key) {
      let index = this.hash(key);
      let originalIndex = index;
      while (this.buckets[index] !== undefined) {
        if (this.buckets[index].key === key) {
          return true;
        }
        index = (index + 1) % this.buckets.length;
        if (index === originalIndex) {
          return;
        }
      }
      return false;
    }
  
    //remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.

    remove(key) {
      let index = this.hash(key);
      let originalIndex = index;
      while (this.buckets[index] !== undefined) {
        if (this.buckets[index].key === key) {
          this.buckets.splice(index, 1, undefined);
          this.size--;
          return true;
        }
        index = (index + 1) % this.buckets.length;
        if (index === originalIndex) {
          return;
        }
      }
      return false;
    }

    //length() returns the number of stored keys in the hash map.
  
    length() {
      return this.size;
    }

    //clear() removes all entries in the hash map.
  
    clear() {
      this.size = 0;
      return (this.buckets = new Array(this.buckets.length));
    }
  
    //keys() returns an array containing all the keys inside the hash map.

    keys() {
      let keysArr = [];
      if (this.length() !== 0) {
        for (let i = 0; i < this.buckets.length; i++) {
          if (this.buckets[i] !== undefined) {
            keysArr.push(this.buckets[i].key);
          }
        }
      }
      return keysArr;
    }

    //values() returns an array containing all the values.

    values() {
      let valuesArr = [];
      if (this.length() !== 0) {
        for (let i = 0; i < this.buckets.length; i++) {
          if (this.buckets[i] !== undefined) {
            valuesArr.push(this.buckets[i].value);
          }
        }
      }
      return valuesArr;
    }
  
    //entries() returns an array that contains each key, value pair.

    entries() {
      let entriesArr = [];
      if (this.length() !== 0) {
        for (let i = 0; i < this.buckets.length; i++) {
          if (this.buckets[i] !== undefined) {
            entriesArr.push([this.buckets[i].key, this.buckets[i].value]);
          }
        }
      }
      return entriesArr;
    }
  }
  
  const list = new HashMap();
  list.set("hello", 34);
  list.set("hei", 72);
  list.set("vlvo", 27);
  list.set("jio", 45);
  list.set("AE", 14);
  list.set("PQ", 54);
  list.set("Li", 96);
  list.set("Hy", 32);
  list.set("Fy", 12);
  list.set("KK", 23);
  list.set("He", 66);
  list.set("Cy", 42);
  list.set("aqli", 17);
  list.set("cthy", 86);
  
  console.log(" Value for key 'aqli':", list.get("aqli"));
  console.log("Has Key 'KK'?", list.has("KK"));
  console.log("Remove Key 'Hy':", list.remove("Hy"));
  console.log("Length of Map:", list.length());
  console.log("Keys:", list.keys());
  console.log("Values:", list.values());
  console.log("Entries:", list.entries());
  