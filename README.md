# flickr-gallery
Images gallery from Flickr API with React/Redux and Node.js server API

## UNIT TESTS

#### Client tests
Run `npm test` to launch all tests, this command will create a **coverage folder** where you can see the code coverage

#### Server tests
Run `npm run test:server` to launch the endpoint tests

## HOW TO
Steps to run the project:

* Install dependencies: `npm install `
* Build API server: `npm run build:server`
* Start API server: `node server/build/bundle.js` (keep this terminal opened)
* Start dev server on **localhost:3000** (on new terminal): `npm start`
* Create a production build: `npm run build`

## MADE WITH

Client side
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Axios](https://github.com/axios/axios)
* [Redux-thunk](https://github.com/gaearon/redux-thunk)
* [Jest](https://facebook.github.io/jest/)
* [Enzyme](http://airbnb.io/enzyme/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [PostCSS](http://postcss.org/)
* [SASS](https://sass-lang.com/)
* [Standard](https://standardjs.com/)

Server side
* [Express](https://expressjs.com/)
* [Mocha](https://mochajs.org/)
* [Supertest](https://github.com/visionmedia/supertest)