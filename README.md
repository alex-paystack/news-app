# News App

An app that shows the news. The deployed version can be found [here](https://alex-paystack.github.io/news-app/)

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) so the setup should be familiar.

Some noteworthy mentions include:

- A `scripts` folder which houses a `csvToJson` script to convert data in `csv` format to `json`
- A `src/utils` folder that holds reusable pieces of functionality
- A `src/components` folder that holds custom react components
- A `src/data` folder that holds the `csv` data file and the `json` file created from that
- A `src/types` folder that holds shared type definitions

## Testing

A number of tests have been included in this project:

- Unit tests for reusable utility functions which can be found in the `src/utils/__tests__` folder
- Snapshot test for the reusable Timeline component which can be found in the `src/components/__tests__` folder

Beyond these, further integration tests could be added to verify that all the components of the application work together correctly. This can be done with `react-testing-library` or `Cypress/Playwright` for end to end tests

## Available Scripts

In the project directory, you can run:

### `npm start`

Converts the `csv` data file to `json` and runs the app in the development mode.\
Open [http://localhost:3000/news-app](http://localhost:3000/news-app) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Converts the `csv` data file to `json` and builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
