# HTML Data Render Package

Package to provide a out of the box html from diferent data.

# Usage

All the functions returns a HTML with the provided data. 

## Dependency import

- Manual NPM Configuration (just add this line into the package.json)
```javascript
"htmldatarender": "git://github.com:udiante/npm-html-data-render#semver:^1.0"
```

- Local development
```javascript
"htmldatarender": "file:./../npm-html-data-render"
```
## Render Markdown files

> Providing the MarkDown data
````javascript
const Render = require('htmldatarender')
let htmlMD = Render.renderMarkdown(MD_INDEX)
res.send(htmlMD) // Example with express
````

> Providing the filepath
````javascript
const Render = require('htmldatarender')

// Sync mode
let htmlMD = Render.renderMarkDownFile(MD_PATH)
res.send(htmlMD) // Example with express

// Async mode
Render.renderMarkDownFile(MD_PATH, function(htmlMD){
    res.send(htmlMD) // Example with express
})
````

## Render Objects (json)

> Providing the Object
````javascript
const Render = require('htmldatarender')
let jsonHTML = Render.renderJSON({ a: "a", 1: false })
res.send(jsonHTML) // Example with express
````

> Providing the json path
````javascript
const Render = require('htmldatarender')

// Sync mode
let htmlMD = Render.renderJSONFile(JSON_PATH)
res.send(htmlMD) // Example with express

// Async mode
Render.renderJSONFile(JSON_PATH, function(html){
    res.send(html) // Example with express
})
````