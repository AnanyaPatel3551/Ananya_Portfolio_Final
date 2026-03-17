# 🚀 CODEBASE ANALYZER


██████╗ ██████╗ ██████╗ ███████╗ █████╗ ████████╗███████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝
██║ ██║ ██║██████╔╝█████╗ ███████║ ██║ █████╗
██║ ██║ ██║██╔══██╗██╔══╝ ██╔══██║ ██║ ██╔══╝
╚██████╗╚██████╔╝██║ ██║███████╗██║ ██║ ██║ ███████╗
╚═════╝ ╚═════╝ ╚═╝ ╚═╝╚══════╝╚═╝ ╚═╝ ╚═╝ ╚══════╝


A Node.js CLI tool that scans any code project, counts files, functions, classes, largest files, and prints metrics in a clean, readable way.

---

## 🎯 Motivation

I built this tool to quickly get insights into any coding project without opening every file.
It started as a simple file scanner and gradually became a robust, professional CLI analyzer supporting multiple languages, largest file tracking, and code density metrics.

---

## ✨ Features

**Core Features:**

- Recursive directory scanning
- Total number of files
- Count of files by type (js, py, java, ts…)
- Function and class detection
- Total lines of code
- Largest file identification
- Folder structure visualization

**Advanced Features:**

- Multi-language support (any text/code files)
- Top N largest files (configurable via CLI)
- Average lines per file (code density)
- Ignore folders like `node_modules` or `.git` (CLI flag)
- CLI flags for flexibility (`--top`, `--ignore`)
- Robust handling: skips unreadable/binary files
- Modular and extendable for future improvements

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/code-analyzer.git

Navigate into the folder:

cd code-analyzer

Make sure Node.js (v14+) is installed

🏃 How to Run
Basic usage
node index.js .
Specify allowed extensions
node index.js . js,py,java
Show top N largest files
node index.js . --top=5
Ignore specific folders
node index.js . --ignore=node_modules,build
Combine options
node index.js . js,py --top=5 --ignore=node_modules,build
📂 Folder Structure
code-analyzer/
├── index.js
├── analyzer/
│   ├── fileScanner.js
│   ├── metricsCalculator.js
│   └── reportGenerator.js
└── utils/
    └── helpers.js

index.js – CLI entry point

fileScanner.js – Recursively scans directories

metricsCalculator.js – Counts lines, functions, classes, top files

reportGenerator.js – Prints the report

helpers.js – Folder tree visualization

📊 Example Output
Total Files: 50
Total Lines: 5400
Functions: 120
Classes: 15
Average Lines per File: 108.00

File Types:
  .js: 20
  .py: 10
  .java: 15
  .ts: 5

Top 3 Largest Files:
  1. app.js (450 lines)
  2. main.py (400 lines)
  3. utils.js (350 lines)
🔮 Future Improvements

AST parsing for more accurate function/class detection

GitHub repository analysis directly

React dashboard with interactive charts

Advanced metrics: cyclomatic complexity, code duplication, test coverage

Interactive CLI prompts for dynamic configuration

📝 Notes

This project was built step by step, gradually adding:

Directory scanning

Function and class detection

Largest file analysis

Multi-language support

Top N largest files

Average lines per file metric

CLI flags (--top, --ignore)

Robust handling of binary/unreadable files