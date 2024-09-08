# 🎓 CertiLink DApp: Your Digital Credential Hub

Welcome to the **CertiLink DApp**! 🌟 This decentralized application (DApp) provides a seamless, secure, and fun way to issue and verify certificates on the blockchain. Say goodbye to fake certificates and hello to trust and transparency! 🚀

---

## 🎥 Demo Video

Check out our live demo! 🎬👇

[![Watch the video](https://github.com/Neethu-Muthu/Certificate-DApp/blob/main/UI/src/assets/images/Untitled%20design.png)](https://drive.google.com/file/d/1_6vBqRGVBXi8S9eJxHmEOTpMXTQD_iaH/view?usp=sharing)

---

## ✨ Features

🛠 **Issue Certificates**: Administrators can create certificates for students with course details, grades, and dates.

🔍 **Verify Certificates**: Verify certificates by simply entering the certificate ID—anyone can do it!

🔐 **Blockchain Security**: Powered by Ethereum, all certificates are stored on the blockchain, ensuring they can't be altered or forged.

🎨 **Beautiful UI**: A sleek, modern interface built with React and styled with Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites

Before you get started, make sure you have the following:

- 🖥 [Node.js](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/) (usually installed with Node.js)
- 🔐 [Metamask](https://metamask.io/)
- 💰 Ethereum wallet with testnet ETH

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/neethu-muthu/CertiLink-DApp.git
   cd UI
   
2. Install dependencies

```
npm install
```
```
npm i hardhat
```
```
npm hardhat compile
```
Add a main network to hardhat.config.
- here im using sepolia and infura 
- add your api key for your sepolia from infura
- add your metamask private key 
eg.
```
module.exports = {
  defaultNetwork:"infurasepolia",
  networks: {
    localhost: {
      url:"http://127.0.0.1:8545/"
    },
    infurasepolia: {
      url :"your api key of infura or any other accounts",
      accounts:["your metamask private key"]
    }
  },
  solidity: "0.8.20",
};
```
```
npx hardhat node
```
open another terminal in vscode(ctrl+shift+`)

```
npx hardhat ignition deploy ignition/modules/Cert.js
``` 
open another terminal in vscode(ctrl+shift+`)

```
cd ui
npm i 
```
Go to folder src/SCdata

- add Abi code to cert.json file
- add deployed address to deployedaddress.json(deployed address will get after deploying the contract)
  
```
npm run dev
```
- connect your metamask
- issue certificate
- enter details
- make payment in metamask
- after metamask confirm get you certificate by enter your uinique id
---

## 💻 Frontend Overview

The DApp is designed to be user-friendly and interactive. Here’s what it offers:

- **🏠 Home Page**: Connect your Metamask wallet and easily search for certificates by ID.
  
- **📝 Issue Page**: Admins can issue new certificates by filling out a simple form with course details, candidate name, grade, and issue date.
  
- **📜 Certificate Page**: Displays detailed certificate information fetched directly from the blockchain.

---

## 🎯 Usage Guide

### Connect to Metamask

Make sure to connect your Metamask wallet before interacting with the DApp:

```javascript
const provider = new BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
```

### Issue a Certificate

Admins can issue new certificates through the **Issue Certificate** page:

```javascript
const tx = await instance.issue(cerid, cname, course, grade, date);
```

### Verify a Certificate

Users can verify certificates by entering the ID on the **Home** page. The data is securely fetched from the blockchain!

---

## 🎨 Screenshots

### 📸 App Overview

Check out the visual highlights of the CertiLink app:

![Home Page](UI/src/assets/images/img.jpeg)


---

## 🤝 Contributing

We welcome contributions! 🙌 Feel free to fork this project, open issues, or submit pull requests. Let’s build something amazing together! 🚀

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

---

💻 **Happy coding!** 😊
