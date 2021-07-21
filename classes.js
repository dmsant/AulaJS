class Book{
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }

    read(){
        return `Estou lendo ${this.title}` /*forma de acessar variável com a crase*/
    }
}

let book = new Book('Algoritimos para viver','Brian',500);
let otherBook = new Book('Um Exu em Nova York','Cidinha da Silva', 100);

console.log(book.read())
console.log(book,otherBook)
console.log(book.title)

/*Para herança ver aula*/