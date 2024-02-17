

# WhatsApp Bot by Node.js + whatsapp-web.js
> Since this project still on development 🚧, I do not have any briliant names for it. Maybe soon, stay tuned !
#### Just an automated WhatsApp reply system based on text sent that built under Node.js, with help of a library called [whatsapp-web.js](https://wwebjs.dev/).

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.png)](https://nodejs.org)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.png)](https://web.pln.co.id/tentang-kami/profil-perusahaan)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
# Technology Used
<a href='https://nodejs.org' target="_blank"><img alt='node.js' src='https://img.shields.io/badge/Node.js-100000?style=for-the-badge&logo=node.js&logoColor=white&labelColor=60AA50&color=447C42'/></a> <a href='https://www.typescriptlang.org/' target="_blank"><img alt='typescript' src='https://img.shields.io/badge/Typescript-100000?style=for-the-badge&logo=typescript&logoColor=white&labelColor=5094DD&color=5094DD'/></a>


# Table of contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Configurations](#configurations)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

# Requirements
[(Back to top)](#table-of-contents)  
This project requires **Node.js** to run, I use **Node v20.10** on Windows 10 and **Debian 11** too and it works fine. I haven't tested it yet on different version or environment than mine, but you may try it and report it to me, so I can update this details by you :).

Oh also, make sure you have installed **NPM** too. Usually **Node.js** includes **NPM** so you don't need to install it again.

**🔴 IMPORTANT NOTICE 🔴**  
This project greatly having use of [whatsapp-web.js](https://wwebjs.dev/),  and maybe **if you are running on a `no-gui` Linux image (Server, or Linux OS that do not installed GUI system)**, you may need to see and follow this page first : [Click Me](https://wwebjs.dev/guide/#installation-on-no-gui-systems)

# Installation
[(Back to top)](#table-of-contents)  
First thing you do, clone this repo by using :  
```bash
git clone https://github.com/gensart-ai/whatsapp-bot.git
```
Do not know how to clone in GitHub ? maybe you can check this page for a quickstart : [Click Me!](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

After that, go to the repo root directory and do the command below to install the packages needed for the project :
```bash
npm i
```
And it's done.
# Configurations
[(Back to top)](#table-of-contents)  
As the current version, I put some global configurations on a Typescript file in : `./src/env.ts`. You can change the bot name, imgBb keys, etc.

For `imgBBKey`, you can retrieve the key from [here](https://api.imgbb.com/), but you may need to sign up first if you didn't have any ImgBB account before.

# Quickstart
[(Back to top)](#table-of-contents)  
If you have done the [Installation](#installation) and have checked the [Configurations](#configurations), you can open the terminal at root directory of the project and do the command below to build the `src` to JavaScript to `dist`:
```bash
npm run build
```
After that, you can run the project using this command :
```bash
npm run serve
```
If you succeed, you should see some message like this :
![WhatsApp QR Code shown on terminal](https://i.ibb.co/K5rzdxp/readme-quickstart-1.png)
The terminal will shows a QR Code to be scanned with your WhatsApp app (doing it like scanning for WhatsApp Web). And if project succeed the QR, it will output :  
`System is online!`  
And congrats, your WhatsApp number (that scan the QR) is successfully integrated with the project !🎉
# Usage
[(Back to top)](#table-of-contents)  
As of current version, you can send a message : `.help` to an associated WhatsApp number with the project, you can see the detail of features on there ! :)

# Contributing
[(Back to top)](#table-of-contents)  
Your contributions are always welcome! Please have a look at the [contribution guidelines](CONTRIBUTING.md). :tada:

# License
[(Back to top)](#table-of-contents)  
The MIT License (MIT) 2017 - [Genesaret Johnes](https://github.com/gensart-ai/). Please have a look at the [license](LICENSE.md) for more details.
