const fs = require("fs");
const path = require("path");

function isCodeFile(file) {
  const nonCodeExtensions = ["png","jpg","jpeg","gif","bmp","pdf","exe","dll","ico"];
  const ext = path.extname(file).slice(1).toLowerCase();
  if (nonCodeExtensions.includes(ext)) return false;

  try {
    fs.readFileSync(file, "utf-8");
    return true;
  } catch {
    return false;
  }
}

function calculateMetrics(files, allowedExtensions, topNFiles = 3) {
  let totalLines = 0;
  let fileTypes = {};
  let largestFiles = [];
  let functionCount = 0;
  let classCount = 0;

  for (let file of files) {
    const ext = path.extname(file).slice(1);
    if (!allowedExtensions.includes(ext)) continue;
    if (!isCodeFile(file)) continue;

    let content;
    try {
      content = fs.readFileSync(file, "utf-8");
    } catch {
      continue;
    }

    const lines = content.split("\n").length;
    totalLines += lines;

    largestFiles.push({ path: file, lines });
    fileTypes[ext] = (fileTypes[ext] || 0) + 1;

    const functionMatches = content.match(
      /function\s+\w+\s*\(|\w+\s*=\s*\(?.*\)?\s*=>|\w+\s*=\s*function\s*\(/g
    );
    if (functionMatches) functionCount += functionMatches.length;

    const classMatches = content.match(/class\s+\w+/g);
    if (classMatches) classCount += classMatches.length;
  }

  largestFiles.sort((a,b) => b.lines - a.lines);
  const topLargestFiles = largestFiles.slice(0, topNFiles);

  return {
    totalLines,
    fileTypes,
    topLargestFiles,
    functionCount,
    classCount,
    averageLinesPerFile: files.length ? (totalLines / files.length) : 0
  };
}

module.exports = { calculateMetrics };