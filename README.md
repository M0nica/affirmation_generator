### affirmation generator
[![Netlify Status](https://api.netlify.com/api/v1/badges/ec8dd57a-9951-4166-bba9-bb5f99354b29/deploy-status)](https://app.netlify.com/sites/affectionate-jackson-f15dd5/deploys)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Users can visit this site to view the collection thus far - an affirmation is randomly generated each visit or when the next button is pushed.

![App Screenshot](public/app-screenshot.png)

## How to Add Affirmations
Additional affirmations can be submitted by editing to the [quotes.js](src/quotes.js) file.

The basic object structure of an affirmation in this project is:

```
{
  quote:
    "",
  author: ""
}
```

See the [quotesTemplate.js](src/quoteTemplate.js) file for a further example of what should be added to the `quotes` array in the [quotes.js](src/quotes.js) file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://jodylecompte.com"><img src="https://avatars0.githubusercontent.com/u/38302762?v=4" width="100px;" alt="Jody LeCompte"/><br /><sub><b>Jody LeCompte</b></sub></a><br /><a href="https://github.com/M0nica/affirmation_generator/commits?author=jodylecompte" title="Code">💻</a></td><td align="center"><a href="https://www.aboutmonica.com"><img src="https://avatars0.githubusercontent.com/u/6998954?v=4" width="100px;" alt="Monica Powell"/><br /><sub><b>Monica Powell</b></sub></a><br /><a href="https://github.com/M0nica/affirmation_generator/commits?author=m0nica" title="Code">💻</a> <a href="#content-m0nica" title="Content">🖋</a> <a href="https://github.com/M0nica/affirmation_generator/commits?author=m0nica" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
