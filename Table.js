class Table {

    constructor(arr) {
        this.header = arr[0];
        arr.shift(); // Remove o primeiro elemento do array
        this.rows = arr;
    }
    get RowCount() { // Get vai transformar o método em atributo
        return this.rows.length; // contagem de linhas
    }
    get ColumnCount() {
        return this.header.length;
    }
}

module.exports = Table