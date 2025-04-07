import { Item, ItemCategory } from "./Item.model";

export type Type = "action figure" | "doll" | "puzzle" | "board game" | "educational toy" | "stuffed animal" | "vehicle" | "building set" | "art and craft" | "musical instrument";
export type AgeGroup = "infant" | "toddler" | "preschool" | "school-age" | "teen" | "adult";
export type Brand = "LEGO" | "Barbie" | "Hot Wheels" | "Play-Doh" | "Fisher-Price" | "Hasbro" | "Mattel" | "Melissa & Doug" | "VTech" | "Nerf";
export type Material = "plastic" | "wood" | "metal" | "fabric" | "paper" | "foam" | "rubber" | "ceramic" | "glass" | "composite";
export type BatteryRequired = "yes" | "no";
export type Educational = "yes" | "no";


export class Toy implements Item {
    private type: Type;
    private ageGroup: AgeGroup;
    private brand: Brand;
    private material: Material;
    private batteryRequired: BatteryRequired;
    private educational: Educational;

    constructor(
        type: Type,
        ageGroup: AgeGroup,
        brand: Brand,
        material: Material,
        batteryRequired: BatteryRequired,
        educational: Educational
    ) {
        this.type = type;
        this.ageGroup = ageGroup;
        this.brand = brand;
        this.material = material;
        this.batteryRequired = batteryRequired;
        this.educational = educational;
    }

    getCategory(): ItemCategory {
        return ItemCategory.TOY;
    }

    getType(): string {
        return this.type;
    }

    getAgeGroup(): string {
        return this.ageGroup;
    }

    getBrand(): string {
        return this.brand;
    }

    getMaterial(): string {
        return this.material;
    }

    isBatteryRequired(): string {
        return this.batteryRequired;
    }

    isEducational(): string {
        return this.educational;
    }
}