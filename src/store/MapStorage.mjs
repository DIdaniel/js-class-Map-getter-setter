let uniqueInstance;

class MapStorage {
  constructor() {
    // uniqueInstance가 null, undefined라면 false!
    // 어떤 참조값이 들어있다면 return이 실행된다!
    if (uniqueInstance) {
      return uniqueInstance;
    }
    this._clubMap = new Map();
    uniqueInstance = this;
  }

  get clubMap() {
    return this._clubMap;
  }
}

let map1 = new MapStorage();
let map2 = new MapStorage();

// console.log(map1 === map2);
// console.log(map1.clubMap === map2.clubMap);

export default new MapStorage();
