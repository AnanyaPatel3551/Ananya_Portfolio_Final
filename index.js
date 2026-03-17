const path = require("path");
const { scanDirectory } = require("./analyzer/fileScanner");
const { calculateMetrics } = require("./analyzer/metricsCalculator");
const { generateReport } = require("./analyzer/reportGenerator");
const { printTree } = require("./utils/helpers");

// Read folder path
const folderPath = process.argv[2];
if (!folderPath) {
  console.error("Please provide a folder path");
  console.log("Usage: node index.js <folder-path> [allowed-extensions] [--top=N] [--ignore=folders]");
  process.exit(1);
}

// Dynamic allowed extensions
const defaultCodeExtensions = [
  "js","ts","jsx","tsx","py","java","c","cpp","cs","go","rb","php",
  "swift","kt","kts","m","scala","sh","rs","lua","dart","html","css"
];
let allowedExtensions = process.argv[3]
  ? process.argv[3].split(",").map(ext => ext.trim())
  : defaultCodeExtensions;

// CLI flags
let topNFiles = 3;
let ignoreFolders = ["node_modules", ".git"];
process.argv.slice(4).forEach(arg => {
  if (arg.startsWith("--top=")) topNFiles = parseInt(arg.split("=")[1]);
  if (arg.startsWith("--ignore=")) ignoreFolders = arg.split("=")[1].split(",").map(f => f.trim());
});

const fullPath = path.resolve(folderPath);

console.log(`Scanning directory: ${fullPath}`);
console.log(`Allowed file extensions: ${allowedExtensions.join(", ")}`);
console.log(`Ignored folders: ${ignoreFolders.join(", ")}`);
console.log(`Top N largest files: ${topNFiles}\n`);

const files = scanDirectory(fullPath, ignoreFolders);
console.log(`Total files found: ${files.length}`);

// Metrics
const metrics = calculateMetrics(files, allowedExtensions, topNFiles);

// Report
generateReport(metrics, files.length);

// Folder structure
console.log("\nFolder Structure:\n");
printTree(fullPath);