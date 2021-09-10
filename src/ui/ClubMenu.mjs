import { question } from "readline-sync";
import ClubWindow from "./ClubWindow.mjs";

class ClubMenu {
  constructor() {
    this._clubWindow = new ClubWindow();
  }

  displayMenu() {
    console.log("=============================");
    console.log("[CLUB MENU]");
    console.log("=============================");
    console.log(" 1.Resiger");
    console.log(" 2.Find");
    console.log(" 3.Find All");
    console.log(" 4.Modify");
    console.log(" 5.Remove");
    console.log("=============================");
    console.log("0. Exit Program");
  }

  seletMenu() {
    let menuNumber = parseInt(question(`Select : `));
    if (menuNumber >= 0 && menuNumber <= 5) {
      return menuNumber;
    } else {
      console.log(`Invalid Number => ${menuNumber}`);
      return -1;
    }
  }

  exitProgram() {
    console.log("Program exit. Bye bye~~!");
    process.exit(0);
  }

  show() {
    let inputNumber = 0;
    while (true) {
      this.displayMenu();
      inputNumber = this.seletMenu();
      switch (inputNumber) {
        case 1:
          this._clubWindow.register();
          break;
        case 2:
          this._clubWindow = findOne();
          break;
        case 3:
          this._clubWindow.findAll();
          break;
        case 4:
          this._clubWindow.modify();
          break;
        case 5:
          this._clubWindow.remove();
          break;
        case 0:
          this.exitProgram();
          break;
      }
    }
  }
}

new ClubMenu().show();
