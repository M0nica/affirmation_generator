### affirmation generator

[![Netlify Status](https://api.netlify.com/api/v1/badges/ec8dd57a-9951-4166-bba9-bb5f99354b29/deploy-status)](https://app.netlify.com/sites/affirmations/deploys)
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors)

Website: [https://www.affirmations.madewithtech.com/](https://www.affirmations.madewithtech.com/)


Users can visit the [affirmation generator](https://www.affirmations.madewithtech.com/) for inspiration and view the collection thus far - an affirmation is randomly generated :sparkles: each visit or when the next button is pushed.

![App Screenshot](public/app-screenshot.png)

## How to Add Affirmations

Additional affirmations can be submitted by editing to the [affirmations.js](src/affirmations.js) file.

The basic object structure of an affirmation in this project is:

```
{
  affirmation:
    "",
  author: ""
}
```

See the [affirmationsTemplate.js](src/affirmationTemplate.js) file for a further example of what should be added to the `affirmations` array in the [affirmations.js](src/affirmations.js) file.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install Dependencies
run `yarn` or `npm`

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject` or `yarn run eject`

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
<table>
  <tr>
    <td align="center"><a href="https://jodylecompte.com"><img src="https://avatars0.githubusercontent.com/u/38302762?v=4" width="100px;" alt="Jody LeCompte"/><br /><sub><b>Jody LeCompte</b></sub></a><br /><a href="https://github.com/M0nica/affirmation_generator/commits?author=jodylecompte" title="Code">💻</a></td>
    <td align="center"><a href="https://www.aboutmonica.com"><img src="https://avatars0.githubusercontent.com/u/6998954?v=4" width="100px;" alt="Monica Powell"/><br /><sub><b>Monica Powell</b></sub></a><br /><a href="https://github.com/M0nica/affirmation_generator/commits?author=m0nica" title="Code">💻</a> <a href="#content-m0nica" title="Content">🖋</a> <a href="https://github.com/M0nica/affirmation_generator/commits?author=m0nica" title="Documentation">📖</a></td>
    <td align="center"><a href="http://www.skills247.com"><img src="https://avatars1.githubusercontent.com/u/14081255?v=4" width="100px;" alt="DAugusteDataTip"/><br /><sub><b>DAugusteDataTip</b></sub></a><br /><a href="#content-DAugusteDataTip" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.codepresssolutions.com/"><img src="https://avatars1.githubusercontent.com/u/31517766?v=4" width="100px;" alt="Lauren"/><br /><sub><b>Lauren</b></sub></a><br /><a href="https://github.com/M0nica/affirmation_generator/commits?author=unikornintech" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/metalandcoffee"><img src="https://avatars2.githubusercontent.com/u/20868511?v=4" width="100px;" alt="Ebonie"/><br /><sub><b>Ebonie</b></sub></a><br /><a href="https://github.com/M0nica/affirmation_generator/commits?author=metalandcoffee" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/deboutlaw"><img src="https://avatars3.githubusercontent.com/u/36055038?v=4" width="100px;" alt="deb outlaw"/><br /><sub><b>deb outlaw</b></sub></a><br /><a href="https://github.com/M0nica/affirmation_generator/commits?author=deboutlaw" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/LonelyPrincess"><img src="https://avatars1.githubusercontent.com/u/17673317?v=4" width="100px;" alt="Sara Hernández"/><br /><sub><b>Sara Hernández</b></sub></a><br /><a href="https://github.com/M0nica/affirmation_generator/commits?author=lonelyprincess" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
