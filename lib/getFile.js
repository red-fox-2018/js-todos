const fs = require('fs')

class GetFile {

    static getList() {

        let dataJSON = fs.readFileSync('./data.json','utf8',null,2)
        dataJSON = JSON.parse(dataJSON)
        return dataJSON
    }
    
}

module.exports = GetFile