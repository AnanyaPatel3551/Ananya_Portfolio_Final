# 🚀 CODEBASE ANALYZER
██████╗ ██████╗ ██████╗ ███████╗ █████╗ ████████╗███████╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝
██║ ██║ ██║██████╔╝█████╗ ███████║ ██║ █████╗
██║ ██║ ██║██╔══██╗██╔══╝ ██╔══██║ ██║ ██╔══╝
╚██████╗╚██████╔╝██║ ██║███████╗██║ ██║ ██║ ███████╗
╚═════╝ ╚═════╝ ╚═╝ ╚═╝╚══════╝╚═╝ ╚═╝ ╚═╝ ╚══════╝

A **Node.js CLI tool** that scans any code project, counts files, functions, classes, largest files, and prints metrics in a clean, readable way.

---

## 🎯 Motivation

I built this tool to get **quick insights into any coding project** without opening every file.
It started as a simple file scanner and gradually became a **robust, professional CLI analyzer** with support for multiple languages, top largest files, and code density metrics.

---

## ✨ Features

**Core Features**:

- 📁 Recursive directory scanning
- 📝 Total files count
- 🗂 File type breakdown (js, py, java, ts…)
- 🔹 Function and class detection
- 📊 Total lines of code
- 📌 Largest file identification
- 🌳 Folder structure visualization

**Advanced / Resume-Level Features**:

- 🌐 Multi-language support (any text/code file)
- 🔝 Top N largest files (configurable via CLI)
- 📏 Average lines per file (code density)
- 🚫 Ignore folders like `node_modules` or `.git` (CLI flag)
- 🎛 CLI flags for flexibility (`--top`, `--ignore`)
- 🛡 Robust: skips unreadable/binary files
- 🧩 Modular, clean, and extendable

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone <>