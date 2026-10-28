class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            return "Book issued successfully!";
        }
        return "Book is already issued!";
    }

    returnBook() {
        this.isIssued = false;
    }
}

let books = [
    new Book("JavaScript", "John", "101"),
    new Book("Python", "David", "102"),
    new Book("Java", "James", "103")
];

function showBooks() {
    let available = books.filter(book => !book.isIssued);

    document.getElementById("result").innerHTML =
        available.map(book => `${book.title} - ${book.author} - ${book.ISBN}`).join("<br>") || "No books available";
}

function issueBook() {
    let isbn = document.getElementById("isbn").value;
    let book = books.find(book => book.ISBN === isbn);

    if (book) {
        alert(book.issueBook());
    } else {
        alert("Book not found!");
    }

    showBooks();
}

showBooks();

