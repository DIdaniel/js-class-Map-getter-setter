class TravelClub {
  constructor(name, intro) {
    this._name = name;
    this._intro = intro;
    this._foundedDate = new Date();
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get intro() {
    return this._intro;
  }

  set intro(intro) {
    this._intro = intro;
  }

  get foundedDate() {
    return this._foundedDate;
  }
}

export default TravelClub;

// let newClub = new TravelClub("My Club", "Come and Enjoy with my Club");
// console.log(newClub.name);
// console.log("newClub :", newClub);

// newClub.name = "this is new Name";
// console.log("newClubName :", newClub);
