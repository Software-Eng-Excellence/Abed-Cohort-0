import logger from "../../util/logger";
import { Furniture, Type, Color, Material, Style } from "../Furniture.model";

export class FurnitureBuilder {
    private type!: Type;
    private material!: Material;
    private color!: Color;
    private size!: string;
    private style!: Style;
    private assemblyRequired!: boolean;
    private warranty!: string;


    public setType(type: Type): FurnitureBuilder {
        this.type = type;
        return this;
    }

    public setMaterial(material: Material): FurnitureBuilder {
        this.material = material;
        return this;
    }

    public setColor(color: Color): FurnitureBuilder {
        this.color = color;
        return this;
    }

    public setSize(size: string): FurnitureBuilder {
        this.size = size;
        return this;
    }

    public setStyle(style: Style): FurnitureBuilder {
        this.style = style;
        return this;
    }

    public setAssemblyRequired(assemblyRequired: boolean): FurnitureBuilder {
        this.assemblyRequired = assemblyRequired;
        return this;
    }

    public setWarranty(warranty: string): FurnitureBuilder {
        this.warranty = warranty;
        return this;
    }

    build(): Furniture {
        const requiredProperties = [
            this.type,
            this.material,
            this.color,
            this.size,
            this.style,
            this.assemblyRequired,
            this.warranty
        ]
        for (const property of requiredProperties) {
            if (!property) {
                logger.error("Missing required property, could not build furniture");
                throw new Error("Missing required property for FurnitureBuilder");
            }
        }
        return new Furniture(
            this.type,
            this.material,
            this.color,
            this.size,
            this.style,
            this.assemblyRequired,
            this.warranty
        );
    }
}