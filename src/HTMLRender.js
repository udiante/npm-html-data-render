// Dependencies
const fs = require('fs');

const HTML_INDEX = fs.readFileSync(__dirname + '/html/html.html', 'utf8').toString()

module.exports.renderJSONFile = function (filePath, completion) {
    if (completion) {
        // Async read
        var self = this
        fs.readFile(filePath, 'utf8', function (error, data) {
            if (error || !data) {
                completion()
                return
            }
            const dataString = data.toString()
            completion(self.renderJSON(dataString))
        })
    }
    else {
        // Sync read
        const string = fs.readFileSync(filePath, 'utf8').toString()
        return this.renderJSON(string)
    }
}


module.exports.renderJSON = function (json) {
    var jsonString
    if (typeof json === 'string' || json instanceof String) {
        jsonString = JSON.stringify(JSON.parse(json))
    }
    else {
        jsonString = JSON.stringify(json)
    }
    return HTML_INDEX.replace("REPLACE_OBJECT", jsonString)
}