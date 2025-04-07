import { FurnitureBuilder } from '../../src/model/builders/furniture.builder';
import { Furniture } from '../../src/model/Furniture.model';


describe('FurnitureBuilder', () => {
    let furnitureBuilder: FurnitureBuilder;

    beforeAll(() => {
        furnitureBuilder = new FurnitureBuilder();
    });

    it('should create a furniture item with all values', () => {
        const furniture = furnitureBuilder
            .setType('chair')
            .setMaterial('wood')
            .setColor('brown')
            .setSize('large')
            .setStyle('modern')
            .setAssemblyRequired(true)
            .setWarranty('2 years')
            .build();

        expect(furniture).toBeInstanceOf(Furniture);
        expect(furniture.getType()).toBe('chair');
        expect(furniture.getMaterial()).toBe('wood');
        expect(furniture.getColor()).toBe('brown');
        expect(furniture.getSize()).toBe('large');
        expect(furniture.getStyle()).toBe('modern');
        expect(furniture.isAssemblyRequired()).toBe(true);
        expect(furniture.getWarranty()).toBe('2 years');
    });

    // it('should throw an error if required fields are missing', () => {
    //     expect(() => {
    //         furnitureBuilder
    //             .setType('chair')
    //             .setMaterial('wood')
    //             .setColor('brown')
    //             .setSize('large')
    //             .setStyle('modern')
    //             .setAssemblyRequired(true)
    //             .build();
    //     }).toThrow('Missing required fields: warranty');
    // });

    it('should set and retrieve all values correctly', () => {
        furnitureBuilder
            .setType('chair')
            .setMaterial('wood')
            .setColor('brown')
            .setSize('large')
            .setStyle('modern')
            .setAssemblyRequired(true)
            .setWarranty('2 years');

        expect(furnitureBuilder['type']).toBe('chair');
        expect(furnitureBuilder['material']).toBe('wood');
        expect(furnitureBuilder['color']).toBe('brown');
        expect(furnitureBuilder['size']).toBe('large');
        expect(furnitureBuilder['style']).toBe('modern');
        expect(furnitureBuilder['assemblyRequired']).toBe(true);
        expect(furnitureBuilder['warranty']).toBe('2 years');
    });
});