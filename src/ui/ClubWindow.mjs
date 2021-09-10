import { question } from "readline-sync";
import TravelClub from "../entity/TravelClub.mjs";
import ClubCoordinator from "../service/ClubCoordinator.mjs";

class ClubWindow {
  constructor() {
    this._clubCoordinator = new ClubCoordinator();
  }

  register() {
    let newClub = null;
    while (true) {
      let clubName = question("club name(0. Club Menu) : ");
      if (clubName === "0" || clubName === null || clubName === "") {
        break;
      }

      if (this._clubCoordinator.exist(clubName)) {
        console.log(`Club name already exist => ${clubName}`);
        continue;
      }

      let intro = question("club name(0. Club Menu) : ");
      if (intro === "0") {
        break;
      }

      newClub = new TravelClub(clubName, intro);
      this._clubCoordinator.register(newClub);
      console.log(`Resgistered Club : ${clubName}`);
    }
  }

  findAll() {
    if (!this._clubCoordinator.hasClubs()) {
      console.log(`No Clubs in the stroage!!!`);
      return;
    }

    let allClubs = this._clubCoordinator.findAll();
    console.log("... FOUND CLUBS....");

    for (let value of allClubs) {
      console.log("................................");
      console.log(`Club Name : ${value.name}`);
      console.log(`Club Intro : ${value.intro}`);
      console.log(`Founded Date : ${value.foundedDate}`);
    }
  }

  findOne() {
    let foundClub = null;

    if (!this._clubCoordinator.hasClubs()) {
      console.log("No Clubs In the Storage!!!");
      return null;
    }

    while (true) {
      let clubName = question("Club name to find(0. Club menu) : ");
      if (clubName === "0") {
        break;
      }

      if (this._clubCoordinator.exist(clubName)) {
        foundClub = this._clubCoordinator.find(clubName);
        break;
      } else {
        console.log(`No Such Club In the Storag => ${clubName}`);
      }
    }
    return foundClub;
  }

  find() {
    let foundClub = this.findOne();

    if (foundClub) {
      console.log("................................");
      console.log(`Club Name : ${foundClub.name}`);
      console.log(`Club Intro : ${foundClub.intro}`);
      console.log(`Founded Date : ${foundClub.foundedDate}`);
    }
    // else {
    //   console.log(`No Such Club In  The Storeage => ${foundClub.name}`);
    // }
  }

  modify() {
    let targetClub = this.findOne();
    let newIntro = question("New Intro(0. Club menu) : ");

    if (newIntro === "0") {
      ("return");
    }

    this._clubCoordinator.modify(targetClub.name, newIntro);
    console.log("Club intro changed!!!....");
  }

  remove() {
    let targetClub = this.findOne();
    let confirmStr = question("Remove this club? (Y: yes, N: no)");
    if (confirmStr.toLowerCase() === "y" || confirmStr.toLowerCase("YES")) {
      this._clubCoordinator.remove(targetClub.name);
      console.log(`Removing a club ${targetClub.name}`);
    } else {
      console.log(`Removing canclled => ${targetClub.name}`);
    }
  }
}

export default ClubWindow;
