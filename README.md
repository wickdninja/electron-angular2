# Electron & Angular 2 starter

This is a simple starter for using Angular 2 and Electron to create desktop apps.

## Install

`npm install`

## Build & Run

`npm start`

This will create a build and then start to watch for changes and start the electron app. When you make changes to your scripts it should be picked up, recompiled, and the electron app auto refresh.

## Note

This is work in progress and I will add to it or make changes as I discover new things while developing my app.

## Material Design for Angular 2

More information can be found at, <https://github.com/angular/material2>

### 1. Install the Components

Install the components you need through a command like this. Note that Core must be present. A list of what is available can be seen at, <https://www.npmjs.com/%7Eangular2-material>

`npm install --save @angular2-material/core @angular2-material/button @angular2-material/button-toggle @angular2-material/card @angular2-material/checkbox @angular2-material/grid-list @angular2-material/icon @angular2-material/input @angular2-material/list @angular2-material/menu @angular2-material/progress-bar @angular2-material/progress-circle @angular2-material/radio @angular2-material/sidenav @angular2-material/slider @angular2-material/slide-toggle @angular2-material/tabs @angular2-material/toolbar @angular2-material/tooltip`

Remember to add the modules for components you use to `.scr/app.module.ts`. See [this page](https://github.com/angular/material2/blob/master/GETTING_STARTED.md#import-and-use-the-components) for more information.

Update `/src/vendors.ts`. Remove/ add to these as needed (depends on what you actually installed in previous steps)

```ts
// Angular 2
import '@angular/common';
import '@angular/core';
import '@angular/forms';
import '@angular/http';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/router';

// Material Design for Angular 2
import '@angular2-material/core';
import '@angular2-material/button';
import '@angular2-material/button-toggle';
import '@angular2-material/card';
import '@angular2-material/checkbox';
import '@angular2-material/grid-list';
import '@angular2-material/icon';
import '@angular2-material/input';
import '@angular2-material/list';
import '@angular2-material/menu';
import '@angular2-material/progress-bar';
import '@angular2-material/progress-circle';
import '@angular2-material/radio';
import '@angular2-material/sidenav';
import '@angular2-material/slider';
import '@angular2-material/slide-toggle';
import '@angular2-material/tabs';
import '@angular2-material/toolbar';
import '@angular2-material/tooltip';

// RxJS
import 'rxjs/Rx';
```

### 2. Install the Extras

Some of the components need Hammer.js.

`npm install --save hammerjs`

`npm install --save-dev @types/hammerjs`

Update `./tsconfig.json` with hammerjs entry under types.

```json
"types": [
  "core-js",
  "hammerjs"
]
```

Finally you might want to install the [Material Design icons](https://design.google.com/icons/), especially if you are going to be using `md-icon`.

You can either `npm install material-design-icons` or download the zip archive linked at, <http://google.github.io/material-design-icons/>

The package includes various formats for the icons but we are only interested in the CSS and font though. Look for a folder in the package called `iconfont` and copy it out to `./src/assets/` so you end up with `./src/assets/iconfont/`.

Now open `./src/index.html` and update it to point to the icon font's CSS.

```html
<html>
<head>
    <title>APP</title>
    <link href="assets/iconfont/material-icons.css" rel="stylesheet">
</head>
<body>
    <app>Loading ...</app>
    <script src="polyfills.js"></script>
    <script src="vendor.js"></script>
    <script src="app.js"></script>
</body>
</html>
```
