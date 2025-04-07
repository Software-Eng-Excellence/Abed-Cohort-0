import { Item, ItemCategory } from "./Item.model";


export type ProductType = "food" | "toy" | "accessory";
export type PetType = "dog" | "cat" | "bird" | "fish" | "reptile" | "small mammal";
export type Brand = "Purina" | "Royal Canin" | "Pedigree" | "Whiskas" | "Kong" | "Friskies";
export type Size = "small" | "medium" | "large";



export class Pet implements Item {
    private productType: ProductType;
    private petType: PetType;
    private brand: Brand;
    private size: Size;
    private flavor: string;
    private ecoFriendly: string;

    constructor(
        productType: ProductType,
        petType: PetType,
        brand: Brand,
        size: Size,
        flavor: string,
        ecoFriendly: string
    ) {
        this.productType = productType;
        this.petType = petType;
        this.brand = brand;
        this.size = size;
        this.flavor = flavor;
        this.ecoFriendly = ecoFriendly;
    }

    getCategory(): ItemCategory {
        return ItemCategory.TOY;
    }

    getProductType(): string {
        return this.productType;
    }

    getPetType(): string {
        return this.petType;
    }

    getBrand(): string {
        return this.brand;
    }

    getSize(): string {
        return this.size;
    }

    getFlavor(): string {
        return this.flavor;
    }

    getEcoFriendly(): string {
        return this.ecoFriendly;
    }
}