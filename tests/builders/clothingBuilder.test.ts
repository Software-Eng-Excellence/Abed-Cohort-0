import { ClothingBuilder } from '../../src/model/builders/clothing.builder';
import { Clothing } from '../../src/model/Clothing.model';

describe('ClothingBuilder', () => {
    let clothingBuilder: ClothingBuilder;

    beforeAll(() => {
        clothingBuilder = new ClothingBuilder();
    });

    it('should create a clothing item with all values', () => {
        const clothing = clothingBuilder
            .setClothingType('Shirt')
            .setSize('M')
            .setColor('Blue')
            .setMaterial('Cotton')
            .setPattern('Solid')
            .setBrand('Nike')
            .setGender('Unisex')
            .setPackaging('Box')
            .setSpecialRequest('Gift Wrap')
            .build();

        expect(clothing).toBeInstanceOf(Clothing);
        expect(clothing.getClothingType()).toBe('Shirt');
        expect(clothing.getSize()).toBe('M');
        expect(clothing.getColor()).toBe('Blue');
        expect(clothing.getMaterial()).toBe('Cotton');
        expect(clothing.getPattern()).toBe('Solid');
        expect(clothing.getBrand()).toBe('Nike');
        expect(clothing.getGender()).toBe('Unisex');
        expect(clothing.getPackaging()).toBe('Box');
        expect(clothing.getSpecialRequest()).toBe('Gift Wrap');
    });

    // it('should throw an error if required fields are missing', () => {
    //     expect(() => {
    //         clothingBuilder
    //             .setClothingType('Shirt')
    //             .setSize('M')
    //             .setColor('Blue')
    //             .setMaterial('Cotton')
    //             .setBrand('Nike')
    //             .setGender('Unisex')
    //             .setPattern('Solid')
    //             .build();
    //     }).toThrow('Missing required fields: category');
    // });

    it('should set and retrieve all values correctly', () => {
        clothingBuilder
            .setClothingType('Shirt')
            .setSize('M')
            .setColor('Blue')
            .setMaterial('Cotton')
            .setPattern('Solid')
            .setBrand('Nike')
            .setGender('Unisex')
            .setPackaging('Box')
            .setSpecialRequest('Gift Wrap')


        expect(clothingBuilder['clothingType']).toBe('Shirt');
        expect(clothingBuilder['size']).toBe('M');
        expect(clothingBuilder['color']).toBe('Blue');
        expect(clothingBuilder['material']).toBe('Cotton');
        expect(clothingBuilder['brand']).toBe('Nike');
        expect(clothingBuilder['gender']).toBe('Unisex');
        expect(clothingBuilder['pattern']).toBe('Solid');
        expect(clothingBuilder['packaging']).toBe('Box');
        expect(clothingBuilder['specialRequest']).toBe('Gift Wrap');
    });
});