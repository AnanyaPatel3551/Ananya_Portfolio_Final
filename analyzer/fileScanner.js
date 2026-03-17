const fs = require("fs");
const path = require("path");

function scanDirectory(dirPath, ignoreFolders = []) {
  let results = [];
  const items = fs.readdirSync(dirPath).sort();

  for (let item of items) {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      if (ignoreFolders.includes(item)) continue;
      results = results.concat(scanDirectory(fullPath, ignoreFolders));
    } else {
      results.push(fullPath);
    }
  }

  return results;
}

module.exports = { scanDirectory };