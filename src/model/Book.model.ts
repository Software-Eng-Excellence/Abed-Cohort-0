import { Item, ItemCategory } from "./item.model";

type Genre = | "Fiction" | "Non-Fiction" | "Mystery" | "Science Fiction" | "Fantasy" | "Romance" | "Thriller" | "Horror" | "Biography" | "History" | "Poetry" | "Drama";
type Format = | "Hardcover" | "Paperback" | "Ebook" | "Audiobook" | "Graphic Novel" | "Textbook";
type Language = | "English" | "Spanish" | "French" | "German" | "Chinese" | "Japanese" | "Russian" | "Italian" | "Portuguese" | "Arabic";
type SpecialEdition = | "Limited Edition" | "Collector's Edition" | "Anniversary Edition" | "Signed Edition" | "Illustrated Edition";
type PackagingType = | "Box" | "Wrap" | "Bag" | "Envelope" | "Plastic" | "Paper" | "Cardboard";

export class Book implements Item {
    private title: string;
    private author: string;
    private genre: Genre;
    private format: Format;
    private language: Language;
    private publisher: string;
    private specialEdition: SpecialEdition;
    private packaging: PackagingType;

    constructor(
        title: string,
        author: string,
        genre: Genre,
        format: Format,
        language: Language,
        publisher: string,
        specialEdition: SpecialEdition,
        packaging: PackagingType
    ) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.format = format;
        this.language = language;
        this.publisher = publisher;
        this.specialEdition = specialEdition;
        this.packaging = packaging;
    }

    getCategory(): ItemCategory {
        return ItemCategory.BOOK;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getGenre(): string {
        return this.genre;
    }

    getFormat(): string {
        return this.format;
    }

    getLanguage(): string {
        return this.language;
    }

    getPublisher(): string {
        return this.publisher;
    }

    getSpecialEdition(): string {
        return this.specialEdition;
    }

    getPackaging(): string {
        return this.packaging;
    }

}