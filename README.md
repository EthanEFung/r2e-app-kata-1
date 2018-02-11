# react-express-app
Boilerplate for a React and Express application

## About this repository

### Dependencies
- node v9.4.0
- webpack 3.10.0
- express 4.16.2
- babel 6.26.0
- react 16.2.0
- react-dom 16.2.0
- dotenv 5.0.0  -> a `.env` file has not been provided.



### Prepackaged nice to haves
- jest 22.2.1
- nodemon 1.14.12 

## How to run this repository

From the command line run the following commands

```
npm install
npm run build
```
then in a seperate terminal instance
```
npm start
```
Or for application development, run this line instead
```
npm run dev
```

## File Structure
```
{ public } // static files

{ server } // express server
    |---- { routes }
                |---- router
    |---- index.js    

{ src } //react framework
    |---- { components } 
    |---- { css } 
    |---- App.js 
    |---- index.js 

{ tests }    
```
### { public } 
The public repository has been configured to receive a webpack bundle and is sent
to a client upon request to the server. Modifications to this repository should
be handled with care.

Aside: css should be declared within the `src` repository, and seperated by component.

### { server }
The server repository contains the API for our service. Set up routes, business logic, 
and actions that pertain to the use of 3rd party services here.

### { src }
The src repository holds all front-end related matters.

#### { components } 
Store all views to be displayed for clients in this repository. No stateful components
should be written in this repository, and all application state should be delegated 
to the App.js container

#### { css }
This repository holds all styling files. Please style each component individually, and 
import each style to the components as needed.

#### App.js
All application state should be delegated to this component unless specified by an
alternate configuration. (Utilizing Redux, refactoring with alternate Framework, etc.)

#### index.js 
Make front-end configurations in this file. The front-end configuration has been left minimal
to be determined by the developer.

## Testing
This repository comes prepackaged with Jest. From the command line:
```
npm test
```
Be sure to delete the example test after writing a test for full test coverage.

## Contributing
Surfacing any and all issues with this repository is welcomed. 
Please submit an issue with a detail message of how to replicate the bug.

Debuggers are also very much welcomed! You can submit a pull request, as long as
the code is within reason and has tests.
