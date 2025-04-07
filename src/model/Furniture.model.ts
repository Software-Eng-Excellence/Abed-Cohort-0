import { Item, ItemCategory } from "./Item.model";

export type Type = 'chair' | 'table' | 'bed' | 'sofa' | 'cabinet' | 'desk' | 'shelf';
export type Material = 'wood' | 'metal' | 'plastic' | 'glass' | 'leather' | 'fabric' | 'bamboo' | 'marble' | 'rattan';
export type Color = 'black' | 'white' | 'brown' | 'gray' | 'beige' | 'red' | 'blue' | 'green' | 'yellow' | 'orange' | 'purple' | 'pink';
export type Style = 'modern' | 'traditional' | 'contemporary' | 'rustic' | 'industrial' | 'scandinavian' | 'mid-century' | 'minimalist' | 'bohemian' | 'coastal';

export class Furniture implements Item {
    private type: Type;
    private material: Material;
    private color: Color;
    private size: string;
    private style: Style;
    private assemblyRequired: boolean;
    private warranty: string;

    constructor(
        type: Type,
        material: Material,
        color: Color,
        size: string,
        style: Style,
        assemblyRequired: boolean,
        warranty: string
    ) {
        this.type = type;
        this.material = material;
        this.color = color;
        this.size = size;
        this.style = style;
        this.assemblyRequired = assemblyRequired;
        this.warranty = warranty;
    }

    getCategory(): ItemCategory {
        return ItemCategory.FURNITURE;
    }

    getType(): string {
        return this.type;
    }

    getMaterial(): string {
        return this.material;
    }

    getColor(): string {
        return this.color;
    }

    getSize(): string {
        return this.size;
    }

    getStyle(): string {
        return this.style;
    }

    isAssemblyRequired(): boolean {
        return this.assemblyRequired;
    }

    getWarranty(): string {
        return this.warranty;
    }
}