const path = require("path");

function generateReport(metrics, totalFiles) {
  console.log("\n=== Codebase Analysis Report ===\n");

  console.log(`Total Files: ${totalFiles}`);
  console.log(`Total Lines: ${metrics.totalLines}`);
  console.log(`Functions: ${metrics.functionCount}`);
  console.log(`Classes: ${metrics.classCount}`);
  console.log(`Average Lines per File: ${metrics.averageLinesPerFile.toFixed(2)}\n`);

  console.log("File Types:");
  for (let ext in metrics.fileTypes) {
    console.log(`  .${ext}: ${metrics.fileTypes[ext]}`);
  }

  console.log("\nTop Largest Files:");
  metrics.topLargestFiles.forEach((file, index) => {
    console.log(`  ${index + 1}. ${path.basename(file.path)} (${file.lines} lines)`);
  });

  console.log("\n================================\n");
}

module.exports = { generateReport };