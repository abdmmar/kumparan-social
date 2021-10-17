# kumparan-social

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=kumparan-social&style=flat-square)
[![MIT License](https://img.shields.io/github/license/abdmmar/kumparan-social?style=flat-square)](LICENSE)
[![Code style: ESLint](https://img.shields.io/badge/code%20style-ESLint-blueviolet)](https://eslint.org/)
[![Jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

Kumparan - Frontend Technical Assessment

## Prerequisites

1. [yarn](https://yarnpkg.com/) or npm

## Running Locally

Clone the project

```bash
git clone https://github.com/abdmmar/kumparan-social.git
```

Go to the project directory

```bash
cd kumparan-social
```

Install dependencies

```bash
yarn
#or
npm install
```

Start the server

```bash
yarn start
#or
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start develop the page
by modifying file inside `src` folder. The page auto-updates as you edit the file. You will also see any lint errors in
the console.

## Other Available Scripts

In the project directory, you can run:

### `yarn test`

Launches the test runner in the interactive watch mode.<br /> See the section about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br /> It correctly bundles React in production mode and optimizes
the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fabdmmar%2Fkumparan-social)

## Project Structure

- `public/` - Contains icons and `index.html`
- `src/app` - Contains `store`
- `src/components` - Contains components that not related with business logic
- `src/features` - Contains main feature components that user used, including API, Reducer, and UI Components
- `src/mocks` - Contains MSW configuration and handlers
- `src/styles` - Contains global styling, font, and theme
- `src/test` - Contains test utility and data

## Built using

### Dependencies

- [Chakra UI](https://chakra-ui.com/) to create accessible React apps with speed
- [Redux Toolkit and RTK Query](https://react-query.tanstack.com/) for state management, data fetching, and caching.
- [Formik](https://formik.org/) for managing form state, e.g. validation
- [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) for handling breaking error in spesific
  component/page

### Development Dependencies

- Eslint + Prettier for Static analysis to avoid typo/syntax error
- Husky is a git hooks, for example we run `git commit` it's run pre-commit hooks to lint and format document before
  commit to repository
- lint-staged to run linter and prettier

## Author

**Abdullah Ammar** - Initial work - [Github](https://github.com/abdmmar)

## License

MIT
