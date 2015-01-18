# Ampersand Demo Application

A guide or tutorial from nothing to a workign application. This is not a best
practice guide.

Topics:
 [ ] npm scripts

## Init

```
$ npm init
```

Follow prompts to get a starting package.json

## Add http-server

```
$ npm install --save-dev http-server
```

Add `server` script to package.json
```
  "scripts": {
    "server": "http-server -p 8000",
    ...
  },
```

## Add index.html
```
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
```
$ npm run server
```
Open http://localhost:8000 in your browser.

## Create git repo
```
$  git init
```
Add ignores
```
$ echo "node_modules" >> .gitignore
```
Commit files
```
$ git add .
$ git commit -am "initial commit"
```

## Add app.js
```
module.exports = {
    letsGo: function() {
        console.log("lets Go!");
    }
};

module.exports.letsGo();
```

Add watchify (or browserify) to build app.js to index.js
```
$ npm install --save-dev watchify
```

Add watch-js script and start script to package.json
```
  "scripts": {
    "start": "npm run server & npm run watch-js",
    "watch-js": "watchify app.js -o index.js -dv",
    "server": "http-server -p 8000",
    ...
  },
```
Add script to the head index.html
```
    <script src="index.js"></script>
```

## Add a stylesheet

