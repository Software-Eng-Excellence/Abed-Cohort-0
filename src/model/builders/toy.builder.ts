import logger from "../../util/logger";
import { Toy, AgeGroup, BatteryRequired, Brand, Educational, Material, Type } from "../Toy.model";

export class ToyBuilder {
    private type!: Type;
    private ageGroup!: AgeGroup;
    private brand!: Brand;
    private material!: Material;
    private batteryRequired!: BatteryRequired;
    private educational!: Educational;


    public setType(type: Type): ToyBuilder {
        this.type = type;
        return this;
    }

    public setAgeGroup(ageGroup: AgeGroup): ToyBuilder {
        this.ageGroup = ageGroup;
        return this;
    }

    public setBrand(brand: Brand): ToyBuilder {
        this.brand = brand;
        return this;
    }

    public setMaterial(material: Material): ToyBuilder {
        this.material = material;
        return this;
    }

    public setBatteryRequired(batteryRequired: BatteryRequired): ToyBuilder {
        this.batteryRequired = batteryRequired;
        return this;
    }

    public setEducational(educational: Educational): ToyBuilder {
        this.educational = educational;
        return this;
    }

    build(): Toy {
        const requiredProperties = [
            this.type,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational
        ];
        for (const property of requiredProperties) {
            if (!property) {
                logger.error("Missing required property, could not build toy");
                throw new Error("Missing required property in ToyBuilder");
            }
        }
        return new Toy(
            this.type,
            this.ageGroup,
            this.brand,
            this.material,
            this.batteryRequired,
            this.educational
        );
    }
}