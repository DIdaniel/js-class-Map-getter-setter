import TravelClubStore from "../store/TravelClubStore.mjs";

class ClubCoordinator {
  constructor() {
    this._clubStore = new TravelClubStore();
  }

  hasClubs() {
    if (this._clubStore.count() !== 0) {
      return true;
    }
    return false;
  }

  exist(name) {
    return this._clubStore.exist(name);
  }

  register(newClub) {
    return this._clubStore.store(newClub);
  }

  find(name) {
    return this._clubStore.retrieve(name);
  }

  findAll() {
    return this._clubStore.retrieveAll();
  }

  modify(name, intro) {
    if (!this._clubStore.exist(name)) {
      return;
    }
    let foundClub = this._clubStore.retrieve(name);
    foundClub.intro = intro;

    this._clubStore.update(foundClub);
  }

  remove(name) {
    if (!this._clubStore.exist(name)) {
      return;
    }

    this._clubStore.delete(name);
  }
}

export default ClubCoordinator;
