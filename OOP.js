//theme is cops and robbers

//cops have one goal catch the robbers

//robbers have 2 goals get money get away with it

// when you pass in the parameter for start robbery either put true or false true if you want to take peoples money true if you're a good person false (its true by default)
console.warn(
  "i want to specify that if you win and click ok it will take you to a youtube video"
);

class EvilLair {
  constructor() {
    this.robbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.sessionRobbersAmount =
      this.robbers[Math.floor(Math.random() * this.robbers.length)];
  }

  startRobbery(goRob) {
    if (goRob) {
      console.log("The robbery has started!");
    }
  }
}

class PoliceDept {
  constructor() {
    this.cops = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.sessionCopsAmount =
      this.cops[Math.floor(Math.random() * this.cops.length)];
  }

  reportStatus() {
    console.log(`There are ${this.sessionCopsAmount} cops on duty.`);
  }
}

class Bank {
  constructor() {
    this.banksMoney = [
      "200,000",
      "94",
      "745.23",
      "2,000,000",
      "750,000",
      "45.6 billion won",
    ];
    this.sessionBanksMoney =
      this.banksMoney[Math.floor(Math.random() * this.banksMoney.length)];
  }

  checkHeistOutcome(robbersCount, copsCount) {
    console.log(`The bank has ${this.sessionBanksMoney} at stake.`);
    if (robbersCount > copsCount) {
      return jail.failHeist();
    } else {
      return freedom.successfulHeist(this.sessionBanksMoney);
    }
  }
}

class Jail {
  constructor() {
    this.sentences = ["20-life (no parole)", "5-year", "200-year", "35-year"];
  }

  failHeist() {
    const sentence =
      this.sentences[Math.floor(Math.random() * this.sentences.length)];
    alert(
      `You failed and are now serving a ${sentence} sentence. Do the crime, do the time.`
    );
  }
}

class Freedom {
  successfulHeist(amount) {
    alert(`You actually did it! You made it out with ${amount}$.`);
  }
}

const evilLair = new EvilLair();
const policeDept = new PoliceDept();
const bank = new Bank();
const jail = new Jail();
const freedom = new Freedom();

function runProgram(goRob) {
  if (goRob === false) {
    if (
      confirm(
        "You're a good person. Another day goes without a robbery. Go here and enjoy a relaxing beach scene."
      )
    ) {
      window.location.href = "https://www.youtube.com/watch?v=AqmuK5UqBlg"; // took every fiber in my body not to rick roll
    }
    return;
  }
  evilLair.startRobbery(true); // don't worry about this one i know the name seems like you're supposed to change it here
  policeDept.reportStatus();
  bank.checkHeistOutcome(
    evilLair.sessionRobbersAmount,
    policeDept.sessionCopsAmount
  );
}

runProgram(false); //this is where you put either true or false if you want to start heist
