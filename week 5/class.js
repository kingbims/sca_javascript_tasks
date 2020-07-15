class Book {
    constructor(title, genre, author, readBook, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.readBook = true;
        this.readDate = '';
    }
};


class BookList extends Book{
    constructor(title, genre, author, readBook, readDate, nextBook, currentBook, lastBook, bookArray) {
        super(title);
        this.genre = genre;
        this.author = author;
        this.readBook = true;
        this.readDate = '';
        numBooksRead: 4;
        numBooksNotRead: 6;
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;
        this.bookArray = [];
    }

    add(book) {
        this.bookArray.push(book)
    };

    finishCurrentBook() {
        this.currentBook === this.readBook;
        this.currentBook === this.readDate[Date.now];
        this.lastBook === this.currentBook;
        this.currentBook === this.nextBook;
        this.nextBook === this.bookArray[0];
    };
};


let bookSample = new BookList("Fundamentals of Geophysics", "Science", "Moremi Morakinyo", true, "", "Seismic Methods", "Structural Geology", "Environmental Geophysics");

bookSample.add("Engineering Geophysics");
console.log(bookSample);

bookSample.finishCurrentBook();