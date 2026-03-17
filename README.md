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

