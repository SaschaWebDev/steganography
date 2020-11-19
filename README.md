<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/SaschaWebDev/steganography">
    <img src="./steganography/public/android-chrome-192x192.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Simple Steganography</h3>

  <p align="center">
    A react project bringing steganography to the browser!
    <br />
    <a href="https://steganography-leuphana.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/SaschaWebDev/steganography/issues">Report Bug</a>
    ·
    <a href="https://github.com/SaschaWebDev/steganography/pulls">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Learnings:](#learnings)


<!-- ABOUT THE PROJECT -->
## About The Project

![Simple Steganography](https://i.imgur.com/o4RR7lg.png)

For the module "Vertiefung Soziale Medien und Informationssysteme" at Leuphana university during 2020 I had the opportunity to research further into steganography and more creative approaches on encryption.

Steganography is a very interesting topic as there area many ways on how to achieve hiding information in plain sight. Also the concept of not urgently needing to encrypt data to hide it but to make questioning if it is even there in the first place a potential better approach really makes one think about all the use cases and possibilities of this still niche subject.

Thus during my research on the topic I stumbled upon
[Peter Eigenschink's JavaScript implementation of Steganography.js](https://www.peter-eigenschink.at/projects/steganographyjs). After some backtalk to my lecturer I thought it would be a great chance to create a little modern website offering steganographic functionality like hiding text in images for the web while also gaining further insights during the usage of his implementation.

To get this project running I used Create-React-App for bootstrapping and Tailwindcss for dealing with layout pretty fast.

Working with the inputs for the steganographic functions made the implementation a bit difficult for me as either my drag-and-drop file library or the steganography.js library ran into many errors due to asynchronity of file deliverance. The latter works with the HTML5 canvas element and after spending some good hours on the project my approach was to at least drop the drag-and-drop functionality for the original file upload for encoding, but keep it for decoding still available which works now.

A video covering deeper research on the topic of steganography will soon be embedded into the website instead of a piano playing cat.

### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [React](https://reactjs.org/)
* [Steganography.js](https://www.peter-eigenschink.at/projects/steganographyjs/)
* [Yarn](https://classic.yarnpkg.com/en/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

```
yarn start
```

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* yarn

### Installation

1. Clone the repo
```sh
git clone https://github.com/SaschaWebDev/steganography.git
```
2. Chance directory into subfolder
```
cd steganography
```
3. Install Yarn packages
```sh
yarn install
```
4. Start react project
```JS
yarn start
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature-AmazingFeature`)
3. Commit your Changes (`git commit -m 'Added some AmazingFeature'`)
4. Push to the Branch (`git push origin feature-AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/SaschaWebDev/steganography/issues](https://github.com/SaschaWebDev/steganography/issues)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/SaschaWebDev/wasm-video-to-gif/main/LICENSE.txt


## Learnings:
- Third Party scripts without package managers like npm or yarn can be added to React with the postscribe package. But they have to be attached after the DOM has been rendered so the order when postscribe is invoked matters and should be after React has built the site.
- In this project Tailwind was added with different start scripts so that running the project locally the whole css is available but when beeing deployed in production the css will get purged and file sized reduced dramatically.
- Third Party packages not available to npm or yarn can be imported as the javascript file directly in the src/ folder. In the first line of the package /* eslint-disable */ has to be added so that ESLint doesn't try to compile it on React startup. Then the package can be normally imported and functions can be called in ComponentDidUpdate().sdsa
