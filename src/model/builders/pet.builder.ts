import logger from "../../util/logger";
import { Pet, PetType, ProductType, Size, Brand } from "../Pet.model";

export class PetBuilder {
    private productType!: ProductType;
    private petType!: PetType;
    private brand!: Brand;
    private size!: Size;
    private flavor!: string;
    private ecoFriendly!: string;

    public setProductType(productType: ProductType): PetBuilder {
        this.productType = productType;
        return this;
    }

    public setPetType(petType: PetType): PetBuilder {
        this.petType = petType;
        return this;
    }

    public setBrand(brand: Brand): PetBuilder {
        this.brand = brand;
        return this;
    }

    public setSize(size: Size): PetBuilder {
        this.size = size;
        return this;
    }

    public setFlavor(flavor: string): PetBuilder {
        this.flavor = flavor;
        return this;
    }

    public setEcoFriendly(ecoFriendly: string): PetBuilder {
        this.ecoFriendly = ecoFriendly;
        return this;
    }

    build(): Pet {
        const requiredProperties = [
            this.productType,
            this.petType,
            this.brand,
            this.size,
            this.flavor,
            this.ecoFriendly,
        ];
        for (const property of requiredProperties) {
            if (!property) {
                logger.error("Missing required properties, could not build pet.");
                throw new Error("Missing required properties for PetBuilder.");
            }
        }
        return new Pet(
            this.productType,
            this.petType,
            this.brand,
            this.size,
            this.flavor,
            this.ecoFriendly
        );
    }
}