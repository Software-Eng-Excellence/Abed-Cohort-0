import logger from "../../util/logger";
import { Book, Format, Genre, Language, PackagingType, SpecialEdition } from "../Book.model";


export class BookBuilder {
    private title!: string;
    private author!: string;
    private genre!: Genre;
    private format!: Format;
    private language!: Language;
    private publisher!: string;
    private specialEdition!: SpecialEdition;
    private packaging!: PackagingType;

    public setTitle(title: string): BookBuilder {
        this.title = title;
        return this;
    }

    public setAuthor(author: string): BookBuilder {
        this.author = author;
        return this;
    }

    public setGenre(genre: Genre): BookBuilder {
        this.genre = genre;
        return this;
    }

    public setFormat(format: Format): BookBuilder {
        this.format = format;
        return this;
    }

    public setLanguage(language: Language): BookBuilder {
        this.language = language;
        return this;
    }

    public setPublisher(publisher: string): BookBuilder {
        this.publisher = publisher;
        return this;
    }

    public setSpecialEdition(specialEdition: SpecialEdition): BookBuilder {
        this.specialEdition = specialEdition;
        return this;
    }

    public setPackaging(packaging: PackagingType): BookBuilder {
        this.packaging = packaging;
        return this;
    }

    build(): Book {
        const requiredProperties = [
            this.title,
            this.author,
            this.genre,
            this.format,
            this.language,
            this.publisher,
            this.specialEdition,
            this.packaging
        ];
        for (const property of requiredProperties) {
            if (!property) {
                logger.error("Missing required property, could not build Book");
                throw new Error("Missing required property for Book.");
            }
        }

        return new Book(
            this.title,
            this.author,
            this.genre,
            this.format,
            this.language,
            this.publisher,
            this.specialEdition,
            this.packaging
        );
    }
}