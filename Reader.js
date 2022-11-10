const fs = require('fs')
const util = require('util');


class Reader {
    constructor() {
        this.reader = util.promisify(fs.readFile) // O atributo reader recebeu tudo da função fs.readFile
    }
    async Read(filepath) {
        try {
            return await this.reader(filepath, "utf-8")
        } catch (err) {
            return undefined;
        }
    }
}
module.exports = Reader;


















/* COM CALLBACK -V-V-V
class Reader {
    
    Read(filepath) { // Método com parâmetro da classe
        fs.readFile(filepath, {encoding: 'utf-8'}, (err,data) => {
            if(err) {
                console.log(err);
            } else {
                console.log(data);
            }
        })
    }
}

module.exports = Reader;
*/