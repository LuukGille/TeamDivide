
# TeamDivide Application

### This project is created for CodePamoja .
*created by Luuk Gille*

## Table of Contents


- [How to run the Project](#how-to-run-the-project)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm run dev](#npm-run-dev)
  - [npm run build](#npm-run-build)
  - [npm run test](#npm-run-test)
- [Using CSS](#using-css)
- [Adding Components](#adding-components)
- [Fetching Data](#fetching-data)
- [Questions or Feedback?](#questions-or-feedback)

## How to run the Project

- first you need to clone the project [here](https://git.competa.com/)

- run `npm install` 

- run `npm run dev`

## Folder Structure

```
App
├── README.md
├── src
│   ├── assets
│   │   └── favicon.ico
│   ├── components
│   │   └── navigation.vue
│   ├── images
│   │   └── intro.jpg
│   ├── pages
│   │   └── index.js
│   ├── vue.js
│   └── main.js
├── test
│   ├── nav.spec.js
│   └── setup.js
├── webpack.config.js
├── node_modules
│   └── [...]
├── index.html
└── package.json
```

Routing in Vue is based on `view-routing`, so `./pages/index.js` maps to the `/` route and
`./pages/members.js` would map to `/members`.

Out of the box, we get:

- Automatic transpilation and bundling (with webpack and babel)
- Hot code reloading


## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Will automatically open your browser to `http://localhost:8080`,
If it is not opening your browser for you, just visit [http://localhost:8080](http://localhost:8080).

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `.dist` folder.<br>
It correctly bundles the Vue and styling in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the application in production mode.
The application should be compiled with `dist build` first.

### `npm run test`

Will run all your test files.
You could run for example `run test nav-spec.js --watch` for a 
specifically page, this will now run the `nav` test. 

## Using CSS

For this application whe are using scss with CamelCase classes for nesting. For Vue you will style at the bottom of the component in `<style>`

```scss
<style>
	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
		color: #555555;
	}

	.navigation {
		display: flex;
		position: absolute;
		width: 100%;
		height: 75px;

		&Image {
			position: absolute;
			z-index: -1;
			height: 100vh;
			width: 100%;
			object-fit: cover;
		}
	}
</style>
```

## Adding Components

We recommend keeping Vue components in `./components` and they should look like:

### `./components/nav.vue`

```jsx

```

## Fetching Data

You can fetch data in `pages` components using `getInitialProps` like this:

### `./pages/home.js`

```jsx

```


## Questions or Feedback?

If you are having issues or feedback, please let me know. 
You can mail me anytime `lgille@competa.com`