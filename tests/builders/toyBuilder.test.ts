import { ToyBuilder } from '../../src/model/builders/toy.builder';
import { Toy } from '../../src/model/Toy.model';


describe('ToyBuilder', () => {
    let toyBuilder: ToyBuilder;

    beforeAll(() => {
        toyBuilder = new ToyBuilder();
    });

    it('should create a toy item with all values', () => {
        const toy = toyBuilder
            .setType('doll')
            .setAgeGroup('infant')
            .setBrand('LEGO')
            .setMaterial('plastic')
            .setBatteryRequired('no')
            .setEducational('yes')
            .build();

        expect(toy).toBeInstanceOf(Toy);
        expect(toy.getType()).toBe('doll');
        expect(toy.getAgeGroup()).toBe('infant');
        expect(toy.getBrand()).toBe('LEGO');
        expect(toy.getMaterial()).toBe('plastic');
        expect(toy.isBatteryRequired()).toBe('no');
        expect(toy.isEducational()).toBe('yes');

    });

    // it('should throw an error if required fields are missing', () => {
    //     expect(() => {
    //         toyBuilder
    //             .setType('doll')
    //             .setAgeGroup('infant')
    //             .setBrand('LEGO')
    //             .setBatteryRequired('no')
    //             .build();
    //     }).toThrow('Missing required fields: educational');
    // });

    it('should set and retrieve all values correctly', () => {
        toyBuilder
            .setType('doll')
            .setAgeGroup('infant')
            .setBrand('LEGO')
            .setMaterial('plastic')
            .setBatteryRequired('no')
            .setEducational('yes')

        expect(toyBuilder['type']).toBe('doll');
        expect(toyBuilder['ageGroup']).toBe('infant');
        expect(toyBuilder['brand']).toBe('LEGO');
        expect(toyBuilder['material']).toBe('plastic');
        expect(toyBuilder['batteryRequired']).toBe('no');
        expect(toyBuilder['educational']).toBe('yes');
    });
});