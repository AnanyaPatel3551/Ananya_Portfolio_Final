const fs = require("fs");
const path = require("path");

function printTree(dir, indent = "") {
  const items = fs.readdirSync(dir).sort();
  for (let item of items) {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    console.log(indent + item);
    if (stats.isDirectory()) printTree(fullPath, indent + "  ");
  }
}

module.exports = { printTree };