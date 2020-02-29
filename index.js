// Expose all the Package functionality from the index.js

/**
 * Renders a Markdown string into a out of the box HTML
 * @returns {String}
 */
module.exports.renderMarkdown = require('./src/MarkdownRender').renderMarkdown

/**
 * Renders a Markdown file into a out of the box HTML
 * @param {String} filePath Path where the file is located
 * @param {Object} completion ***Optional** If provided the file load is async
 * @returns {String} ***undefined** if a completion callback is provided
 */
module.exports.renderMarkDownFile = require('./src/MarkdownRender').renderMarkDownFile

/**
 * Renders a JSON object into a out of the box HTML
 * @returns {String}
 */
module.exports.renderJSON = require('./src/HTMLRender').renderJSON

/**
 * Renders a JSON object into a out of the box HTML
 * @param {String} filePath Path where the file is located
 * @param {Object} completion ***Optional** If provided the file load is async
 * @returns {String} ***undefined** if a completion callback is provided
 */
module.exports.renderJSONFile = require('./src/HTMLRender').renderJSONFile
