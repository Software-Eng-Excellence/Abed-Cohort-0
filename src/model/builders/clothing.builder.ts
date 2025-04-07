import logger from "../../util/logger";
import { Clothing, ClothingType, Material, Size, Brand, Color, Gender, Packaging, Pattern, SpecialRequest } from "../Clothing.model";


export class ClothingBuilder {
    private clothingType!: ClothingType;
    private size!: Size;
    private color!: Color;
    private material!: Material;
    private pattern!: Pattern;
    private brand!: Brand;
    private gender!: Gender;
    private packaging!: Packaging;
    private specialRequest!: SpecialRequest;


    public setClothingType(clothingType: ClothingType): ClothingBuilder {
        this.clothingType = clothingType;
        return this;
    }

    public setSize(size: Size): ClothingBuilder {
        this.size = size;
        return this;
    }

    public setColor(color: Color): ClothingBuilder {
        this.color = color;
        return this;
    }

    public setMaterial(material: Material): ClothingBuilder {
        this.material = material;
        return this;
    }

    public setPattern(pattern: Pattern): ClothingBuilder {
        this.pattern = pattern;
        return this;
    }

    public setBrand(brand: Brand): ClothingBuilder {
        this.brand = brand;
        return this;
    }

    public setGender(gender: Gender): ClothingBuilder {
        this.gender = gender;
        return this;
    }

    public setPackaging(packaging: Packaging): ClothingBuilder {
        this.packaging = packaging;
        return this;
    }

    public setSpecialRequest(specialRequest: SpecialRequest): ClothingBuilder {
        this.specialRequest = specialRequest;
        return this;
    }
    build(): Clothing {
        const requiredProperties = [
            this.clothingType,
            this.size,
            this.color,
            this.material,
            this.pattern,
            this.brand,
            this.gender,
            this.packaging,
            this.specialRequest
        ]
        for (const property of requiredProperties) {
            if (!property) {
                logger.error("Missing required property, could not build clothing");
                throw new Error("Missing required property for ClothingBuilder");
            }
        }
        return new Clothing(
            this.clothingType,
            this.size,
            this.color,
            this.material,
            this.pattern,
            this.brand,
            this.gender,
            this.packaging,
            this.specialRequest
        );
    }
}
