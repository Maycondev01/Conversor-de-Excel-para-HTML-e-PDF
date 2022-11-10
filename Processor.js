class Processor {
    static Process(data) {
        var a = data.split("\r\n");
        var linhas = [];

        a.forEach(row => {
            var arr = row.split(","); // Dividi por strings e substring
            linhas.push(arr); // Empurra ao final
        });

        return linhas;

    }
}
module.exports = Processor;