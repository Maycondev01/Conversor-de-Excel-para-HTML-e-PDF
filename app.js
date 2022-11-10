var Reader = require("./Reader"); // Ler Arquivo
var Processor = require("./Processor"); // Configurar dados em string para array
var Table = require("./Table"); // Separar tabela por cabeçalho e linhas
var HtmlParser = require("./HtmlParser"); // Analisar o arquivo no HTML
var Writer = require("./Writer"); // Escrever 
var PDFWriter = require("./PDFWriter"); // Baixar arquivo em pdf 

var leitor = new Reader();
var escritor = new Writer();

async function main() {
        var dados = await leitor.Read("./users.csv");
        var dadosProcessados = Processor.Process(dados)
    
        var usuarios = new Table(dadosProcessados);  
        
        var html = await HtmlParser.Parse(usuarios);
        
        escritor.Write(Date.now() + ".html", html);
        PDFWriter.WritePDF(Date.now() + ".PDF", html);
}

main();