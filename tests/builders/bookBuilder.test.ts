import { BookBuilder } from '../../src/model/builders/book.builder';
import { Book } from '../../src/model/Book.model';

describe('BookBuilder', () => {
    let bookBuilder: BookBuilder;

    beforeAll(() => {
        bookBuilder = new BookBuilder();
    });

    it('should create a book item with all values', () => {
        const book = bookBuilder
            .setTitle('The Great Gatsby')
            .setAuthor('F. Scott Fitzgerald')
            .setGenre('Fiction')
            .setFormat('Hardcover')
            .setLanguage('English')
            .setPublisher('Scribner')
            .setSpecialEdition('Collector\'s Edition')
            .setPackaging('Box')
            .build();

        expect(book).toBeInstanceOf(Book);
        expect(book.getTitle()).toBe('The Great Gatsby');
        expect(book.getAuthor()).toBe('F. Scott Fitzgerald');
        expect(book.getGenre()).toBe('Fiction');
        expect(book.getFormat()).toBe('Hardcover');
        expect(book.getLanguage()).toBe('English');
        expect(book.getPublisher()).toBe('Scribner');
        expect(book.getSpecialEdition()).toBe('Collector\'s Edition');
        expect(book.getPackaging()).toBe('Box');
    });

    // it('should throw an error if required fields are missing', () => {
    //     expect(() => {
    //         bookBuilder
    //             .setTitle('The Great Gatsby')
    //             .setAuthor('F. Scott Fitzgerald')
    //             .setGenre('Fiction')
    //             .setFormat('Hardcover')
    //             .setLanguage('English')
    //             .setPublisher('Scribner')
    //             .setSpecialEdition('Collector\'s Edition')
    //             .build();
    //     }).toThrow('Missing required fields: packaging');
    // });

    it('should set and retrieve all values correctly', () => {
        bookBuilder
            .setTitle('The Great Gatsby')
            .setAuthor('F. Scott Fitzgerald')
            .setGenre('Fiction')
            .setFormat('Hardcover')
            .setLanguage('English')
            .setPublisher('Scribner')
            .setSpecialEdition('Collector\'s Edition')
            .setPackaging('Box');

        expect(bookBuilder['title']).toBe('The Great Gatsby');
        expect(bookBuilder['author']).toBe('F. Scott Fitzgerald');
        expect(bookBuilder['genre']).toBe('Fiction');
        expect(bookBuilder['format']).toBe('Hardcover');
        expect(bookBuilder['language']).toBe('English');
        expect(bookBuilder['publisher']).toBe('Scribner');
        expect(bookBuilder['specialEdition']).toBe('Collector\'s Edition');
        expect(bookBuilder['packaging']).toBe('Box');
    });
});