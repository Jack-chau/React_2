# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# React README

## Introduction

React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by a community of developers. React is known for its simplicity, performance, and flexibility.

## Getting Started

To use React, you will need to have Node.js and npm installed on your machine. You can install them by following the instructions on the official Node.js website. Once you have Node.js and npm installed, you can create a new React project using the create-react-app command line tool.

```
npx create-react-app my-app
cd my-app
npm start

```

## Components

The building blocks of a React application are components. A component is a self-contained piece of code that represents a part of the user interface. Components can be nested inside other components to create complex UIs. React provides two types of components: functional components and class components.

### Functional Components

Functional components are a simpler way to write components. They are just plain JavaScript functions that return JSX. Here is an example of a functional component that displays a simple message:

```
function Hello() {
  return <h1>Hello, world!</h1>;
}

```

### Class Components

Class components are more powerful than functional components. They are JavaScript classes that extend the React.Component class. Here is an example of a class component that displays a message:

```
class Hello extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}

```

## Conclusion

React is a powerful and flexible library for building user interfaces. Its simplicity and performance make it a popular choice among developers. With the knowledge gained from this README, you should be able to start building your own React applications.