class Book {
    constructor(private readonly title: string) {
    }

    getTitle() {
        return 'Title is: ' + this.title
    }
}

const book = new Book('Harry Potter and the Sorcerer\'s Stone')
book.title = 'Toto'
console.debug(book)
