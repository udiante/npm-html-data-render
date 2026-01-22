// Dependencies
const fs = require('fs');
const path = require('path');

const MD_INDEX = fs
    .readFileSync(path.join(__dirname, '/html/md.html'), 'utf8')
    .toString();

let markedInstance = null;

/**
 * Lazy-load marked (ESM) and configure it once
 */
async function getMarked() {
    if (markedInstance) return markedInstance;

    const { marked } = await import('marked');
    const hljs = await import('highlight.js');

    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight(code, language) {
            const validLanguage = hljs.default.getLanguage(language)
                ? language
                : 'plaintext';
            return hljs.default.highlight(code, { language: validLanguage }).value;
        },
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: true,
        xhtml: false
    });

    markedInstance = marked;
    return marked;
}

/**
 * Render markdown string
 */
module.exports.renderMarkdown = async function (mdData) {
    const marked = await getMarked();
    const markdownHTML = marked.parse(mdData);
    return MD_INDEX.replace('REPLACE_MD', markdownHTML);
};

/**
 * Render markdown file (async only, callback optional)
 */
module.exports.renderMarkDownFile = async function (filePath, completion) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        const html = await this.renderMarkdown(data);

        if (completion) completion(html);
        return html;
    } catch (err) {
        if (completion) completion();
        return null;
    }
};
