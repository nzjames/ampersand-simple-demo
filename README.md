# Ampersand Demo Application

A guide or tutorial from nothing to a workign application. This is not a best
practice guide.

Topics:
 [ ] npm scripts

## Init

```bash
$ npm init
```

Follow prompts to get a starting package.json

## Add http-server

```bash
$ npm install --save-dev http-server
```

Add `server` script to package.json
```javascript
  "scripts": {
    "server": "http-server -p 8000",
    ...
  },
```

## Add index.html
```html
<!doctype html>
<html>
<head>
    <title>Ampersand Demo</title>
</head>
<body>
</body>
</html>
```

## Test server
```bash
$ npm run server
```
Open http://localhost:8000 in your browser.

## Create git repo
```bash
$  git init
```
Add ignores
```bash
$ echo "node_modules" >> .gitignore
```
Commit files
```bash
$ git add .
$ git commit -am "initial commit"
```

## Add app.js
```javascript
module.exports = {
    letsGo: function() {
        console.log("lets Go!");
    }
};

module.exports.letsGo();
```

Add watchify (or browserify) to build app.js to index.js
```bash
$ npm install --save-dev watchify
```

Add watch-js script and start script to package.json
```json
  "scripts": {
    "start": "npm run server & npm run watch-js",
    "watch-js": "watchify app.js -o index.js -dv",
    "server": "http-server -p 8000",
    ...
  },
```
Add script to the head index.html
```html
<script src="index.js"></script>
```

Ignore the built JavaScript
```bash
$ echo "index.js" >> .gitignore 
```

## Add a stylesheet

styles.css


## Add Model and view

create a new model header-model.js
```javascript
var AmpersandModel = require('ampersand-model');

module.exports = AmpersandModel.extend({
    props: {
        rightLabel: ['string', true, 'Right Label'],
        leftLabel: ['string', true, 'Left Label'],
        header: ['string', true, 'Ampersand Demo']
    }
});
```
and a view header-view.js
```javascript
var View = require('ampersand-view');

module.exports = View.extend({
    template: '<div><a data-hook="leftlabel"></a><h1 class="main-header" data-hook="header"></h1><a data-hook="rightlabel"></a></div>',
    bindings: {
        'model.leftLabel': '[data-hook=leftlabel]',
        'model.rightLabel': '[data-hook=rightlabel]',
        'model.header': '[data-hook=header]'
    }
});
```
Instance the Model and View in the Main app.js
```javascript
var HeaderModel = require('./header-model');
var HeaderView = require('./header-view');

var headerModel = new HeaderModel({
    leftLabel: 'Back',
    rightLabel: 'Add',
    header: 'Lets Go!'
});

var headerView = new HeaderView({
    model: headerModel
});

```
And render the header via the `letsGo` method
```javascript
    letsGo: function() {
        ...
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('header').appendChild(headerView.render().el);
        });
    }
```
