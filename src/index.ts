import { CakeBuilder } from "./model/builders/cake.builder";
import { BookBuilder } from "./model/builders/book.builder";
import { ClothingBuilder } from "./model/builders/clothing.builder";
import { FurnitureBuilder } from "./model/builders/furniture.builder";
import { PetBuilder } from "./model/builders/pet.builder";
import { ToyBuilder } from "./model/builders/toy.builder";


async function main() {

    // Example usage of CakeBuilder
    const cakeBuilder = new CakeBuilder();
    const cake = cakeBuilder
        .setType("Birthday")
        .setFlavor("Chocolate")
        .setFilling("Vanilla Cream")
        .setSize(8)
        .setLayers(2)
        .setFrostingType("Buttercream")
        .setFrostingFlavor("Chocolate")
        .setDecorationType("Flowers")
        .setDecorationColor("Pink")
        .setCustomMessage("Happy Birthday!")
        .setShape("Round")
        .setAllergies("Nuts")
        .setSpecialIngredients("Organic Cocoa")
        .setPackagingType("Box")
        .build();
    console.log(cake);

    // Example usage of BookBuilder
    const bookBuilder = new BookBuilder();
    const book = bookBuilder
        .setTitle("The Great Gatsby")
        .setAuthor("F. Scott Fitzgerald")
        .setGenre("Fiction")
        .setFormat("Hardcover")
        .setLanguage("English")
        .setPublisher("Scribner")
        .setSpecialEdition("Collector's Edition")
        .setPackaging("Box")
        .build();
    console.log(book);

    // Example usage of ClothingBuilder
    const clothingBuilder = new ClothingBuilder();
    const clothing = clothingBuilder
        .setClothingType("Shirt")
        .setSize("M")
        .setColor("Blue")
        .setMaterial("Cotton")
        .setPattern("Striped")
        .setBrand("Nike")
        .setGender("Unisex")
        .setPackaging("Hanger")
        .setSpecialRequest("Gift Wrap")
        .build();
    console.log(clothing);

    // Example usage of FurnitureBuilder
    const furnitureBuilder = new FurnitureBuilder();
    const furniture = furnitureBuilder
        .setType("sofa")
        .setMaterial("leather")
        .setColor("black")
        .setSize("3-seater")
        .setStyle("modern")
        .setAssemblyRequired(true)
        .setWarranty("2 years")
        .build();
    console.log(furniture);

    // Example usage of PetBuilder
    const petBuilder = new PetBuilder();
    const pet = petBuilder
        .setProductType("toy")
        .setPetType("dog")
        .setBrand("Purina")
        .setSize("small")
        .setFlavor("Chicken")
        .setEcoFriendly("Yes")
        .build();
    console.log(pet);

    // Example usage of ToyBuilder
    const toyBuilder = new ToyBuilder();
    const toy = toyBuilder
        .setType("action figure")
        .setAgeGroup("infant")
        .setBrand("Hasbro")
        .setMaterial("plastic")
        .setBatteryRequired("no")
        .setEducational("yes")
        .build();
    console.log(toy);
}

main();
