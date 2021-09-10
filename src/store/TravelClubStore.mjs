import mapStorage from "./MapStorage.mjs";

class TravelClubStore {
  constructor() {
    this._clubMap = mapStorage.clubMap;
  }
  // 저장 된  TravelClub  수를 반환
  count() {
    return this._clubMap.size;
  }

  exist(name) {
    return this._clubMap.has(name);
  }

  store(newClub) {
    if (this.exist(newClub.name)) {
      return null;
    }
    this._clubMap.set(newClub.name, newClub);
    return newClub.name;
  }

  retrieve(name) {
    return this._clubMap.get(name);
  }

  retrieveAll() {
    return this._clubMap.values();
  }

  update(newClub) {
    this._clubMap.set(newClub.name, newClub);
  }

  delete(name) {
    this._clubMap.delete(name);
  }
}

export default TravelClubStore;
