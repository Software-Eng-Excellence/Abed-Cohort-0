import { Item, ItemCategory } from "./Item.model";

export type ClothingType = | "Shirt" | "Pants" | "Dress" | "Skirt" | "Jacket" | "Sweater" | "T-shirt" | "Shorts" | "Coat" | "Underwear";
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type Color = "Black" | "White" | "Red" | "Blue" | "Green" | "Yellow" | "Purple" | "Pink" | "Gray" | "Brown" | "Navy" | "Beige";
export type Material = "Cotton" | "Wool" | "Silk" | "Polyester" | "Leather" | "Denim" | "Linen" | "Nylon";
export type Pattern = "Solid" | "Striped" | "Plaid" | "Floral" | "Polka Dot" | "Checkered" | "Plain" | "Printed";
export type Brand = "Nike" | "Adidas" | "Zara" | "H&M" | "Gucci" | "Prada" | "Uniqlo" | "Other";
export type Gender = "Male" | "Female" | "Unisex";
export type Packaging = "Hanger" | "Folded" | "Box" | "Bag" | "Vacuum Sealed";
export type SpecialRequest = "None" | "Gift Wrap" | "Express Delivery" | "Special Care" | "Insurance";

export class Clothing implements Item {

    private clothingType: ClothingType;
    private size: Size;
    private color: Color;
    private material: Material;
    private pattern: Pattern;
    private brand: Brand;
    private gender: Gender;
    private packaging: Packaging;
    private specialRequest: SpecialRequest;

    constructor(
        clothingType: ClothingType,
        size: Size,
        color: Color,
        material: Material,
        pattern: Pattern,
        brand: Brand,
        gender: Gender,
        packaging: Packaging,
        specialRequest: SpecialRequest
    ) {
        this.clothingType = clothingType;
        this.size = size;
        this.color = color;
        this.material = material;
        this.pattern = pattern;
        this.brand = brand;
        this.gender = gender;
        this.packaging = packaging;
        this.specialRequest = specialRequest;
    }

    getCategory(): ItemCategory {
        return ItemCategory.CLOTHING;
    }

    getClothingType(): string {
        return this.clothingType;
    }

    getSize(): string {
        return this.size;
    }

    getColor(): string {
        return this.color;
    }

    getMaterial(): string {
        return this.material;
    }

    getPattern(): string {
        return this.pattern;
    }

    getBrand(): string {
        return this.brand;
    }

    getGender(): string {
        return this.gender;
    }

    getPackaging(): string {
        return this.packaging;
    }

    getSpecialRequest(): string {
        return this.specialRequest;
    }
} 