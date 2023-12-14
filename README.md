# Markdown Previewer

A simple Markdown previewer built with React that allows you to write and preview Markdown in real-time. This project is a handy tool for anyone working with Markdown, whether you're writing documentation, blog posts, or README files. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Firebase Setup](#firebase-setup)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the live demo: [Markdown Previewer Demo](https://markdown-previewer-3aa0d.web.app/)

## Features

- Real-time preview of Markdown as you type.
- Login and signup features.
- Supports common Markdown syntax elements.
- Responsive design for various screen sizes.

## Firebase setup

This setup assumes that you already have a Firebase account. If you have not registered yet, you may register here [https://firebase.google.com/](https://firebase.google.com/). There is an option for a [no-cost account](https://firebase.google.com/pricing). 

1. Create Firebase app. For example, we can follow this guide [https://firebase.google.com/learn/pathways/firebase-web](https://firebase.google.com/docs/web/setup?continue=https%3A%2F%2Ffirebase.google.com%2Flearn%2Fpathways%2Ffirebase-web%23article-https%3A%2F%2Ffirebase.google.com%2Fdocs%2Fweb%2Fsetup#create-firebase-project-and-app)

2. Setup Firebase authentication for email and password. We can follow this guide [https://firebase.google.com/docs/auth/web/password-auth#before_you_begin](https://firebase.google.com/docs/auth/web/password-auth#before_you_begin)

## Installation

1. Clone the repository:

```
git clone https://github.com/adhika16/markdown-previewer.git
```

2. Navigate to the project directory:
```
cd markdown-previewer
```

3. Install dependencies:
```
npm install
```

4. Update [Firebase configurations](/src/configs/firebaseConfig.js) with the configuration from your Firebase app. We can follow this guide to get Firebase config [https://support.google.com/firebase/answer/7015592?hl=en#web&zippy=%2Cin-this-article](https://support.google.com/firebase/answer/7015592?hl=en#web&zippy=%2Cin-this-article). 

## Usage

1. Start the development server:
```
npm start
```
2. Open your browser and visit [http://localhost:3000](http://localhost:3000).
3. Login or register to access Markdown Previewer app. 
4. Begin typing Markdown in the editor, and the preview will update in real-time.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Description of your changes'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License
This project is licensed under the [MIT License](/LICENSE).