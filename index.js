const { square, cube } = require("./lib/callbacks");
const assignment = require("./lib/assignment");
const printMessage = require("./lib/printMessage");

const localOrRemote = process.argv[2];
const transformerFunction = process.argv[3];

// console.log("Example of command: node index.js local square");

if (localOrRemote === "local" || localOrRemote === "remote") {
  switch (transformerFunction) {
    case "square":
      printMessage(localOrRemote, transformerFunction);
      assignment(localOrRemote, square);
      break;
    case "cube":
      printMessage(localOrRemote, transformerFunction);
      assignment(localOrRemote, cube);
      break;
    default:
      console.log(`transformerFunction ${transformerFunction} doesnt exist yet. Available soon!`);    
  }
} else {
  console.log("Running default: local file and square callback");
  assignment("local", square);
}
