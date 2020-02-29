// Dependencies
const fs = require('fs');
const marked = require('marked')

const MD_INDEX = fs.readFileSync(__dirname + '/html/md.html', 'utf8').toString()

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function (code, language) {
        const hljs = require('highlight.js');
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: true,
    xhtml: false
});

var renderer = new marked.Renderer();

module.exports.renderMarkDownFile = function (filePath, completion) {
    if (completion) {
        // Async read
        var self = this
        fs.readFile(filePath, 'utf8', function (error, data) {
            if (error || !data) {
                completion()
                return
            }
            const dataString = data.toString()
            completion(self.renderMarkdown(dataString))
        })
    }
    else {
        // Sync read
        const mdString = fs.readFileSync(filePath, 'utf8').toString()
        return this.renderMarkdown(mdString)
    }
}


module.exports.renderMarkdown = function (mdData) {
    const markdownHTML = marked(mdData, renderer)
    return MD_INDEX.replace("REPLACE_MD", markdownHTML)
}