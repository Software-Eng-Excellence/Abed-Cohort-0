import { CakeBuilder } from "./model/builders/cake.builder";

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



}

main();
