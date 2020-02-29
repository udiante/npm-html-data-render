const Render = require('../../index')

const fs = require('fs');
const MD_PATH = __dirname + '/examples/md.md'
const MD_INDEX = fs.readFileSync(MD_PATH, 'utf8').toString()
const outputPath = __dirname + '/examples/output/'

if (!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath);
}

function test() {
    
    let htmlMD = Render.renderMarkdown(MD_INDEX)
    writeFile('fileMD.html', htmlMD)
    writeFile('serialFileMDLoad.html', Render.renderMarkDownFile(MD_PATH))

    Render.renderMarkDownFile(MD_PATH, function(html){
        writeFile('asyncFileMDLoad.html', html)
    })
}

function writeFile(fileName, data) {
    fs.writeFileSync(outputPath +fileName, data, { mode: 0o755 });
}

test()