# ⚙️ TypeScript + Fast Node Manager (fnm) Setup Guide

This guide will walk you through installing and setting up **TypeScript** and **Fast Node Manager (fnm)** on your system.

---

## 📦 What You'll Install

- [fnm](https://github.com/Schniz/fnm) – Fast & simple Node.js version manager
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🧰 Step 1: Install Fast Node Manager (fnm)

### ✅ For Linux/macOS:

1. Run the following command in your terminal:

   ```bash
   curl -fsSL https://fnm.vercel.app/install | bash

2. Add the following lines to your shell config file (~/.bashrc, ~/.zshrc, or ~/.bash_profile):

   ```bash
   export PATH="$HOME/.fnm"
   eval "$(fnm env)"

3. Restart your terminal or run:
   ```bash
   source ~/.bashrc   # or source ~/.zshrc

4.Verify installation:
   ```bash
   fnm --version 

   ```

---


### For Windows:
1. If you have Chocolatey installed:
   ```bash
   choco install fnm

2. Or follow the manual instructions on the fnm GitHub page:
   [fnm]([text](https://github.com/Schniz/fnm#installation))


## 🧰 Step 2: Install Node.js using fnm
1. Install the latest LTS version of Node.js:
  ```bash
  fnm install --lts
  fnm use --lts

2. Confirm it's working:
  ```bash
  node -v
  npm -v

## 🧰 Step 3: Install TypeScript Globally
1. Install TypeScript using npm:
  ```bash
  npm install -g typescript

2. Verify it's installed:
  ```bash
  tsc --version









