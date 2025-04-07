import { PetBuilder } from '../../src/model/builders/pet.builder';
import { Pet } from '../../src/model/Pet.model';

describe('PetBuilder', () => {
    let petBuilder: PetBuilder;

    beforeAll(() => {
        petBuilder = new PetBuilder();
    });

    it('should create a pet with all values', () => {
        const pet = petBuilder
            .setProductType('food')
            .setPetType('dog')
            .setBrand('Purina')
            .setSize('medium')
            .setFlavor('chicken')
            .setEcoFriendly('yes')
            .build();

        expect(pet).toBeInstanceOf(Pet);
        expect(pet.getProductType()).toBe('food');
        expect(pet.getPetType()).toBe('dog');
        expect(pet.getBrand()).toBe('Purina');
        expect(pet.getSize()).toBe('medium');
        expect(pet.getFlavor()).toBe('chicken');
        expect(pet.getEcoFriendly()).toBe('yes');
    });

    // it('should throw an error if required fields are missing', () => {
    //     expect(() => {
    //         petBuilder
    //             .setProductType('food')
    //             .setPetType('dog')
    //             .setBrand('Purina')
    //             .setSize('medium')
    //             .setFlavor('chicken')
    //             .build();
    //     }).toThrow('Missing required fields: ecoFriendly');
    // });

    it('should set and retrieve all values correctly', () => {
        petBuilder
            .setProductType('food')
            .setPetType('dog')
            .setBrand('Purina')
            .setSize('medium')
            .setFlavor('chicken')
            .setEcoFriendly('yes');

        expect(petBuilder['productType']).toBe('food');
        expect(petBuilder['petType']).toBe('dog');
        expect(petBuilder['brand']).toBe('Purina');
        expect(petBuilder['size']).toBe('medium');
        expect(petBuilder['flavor']).toBe('chicken');
        expect(petBuilder['ecoFriendly']).toBe('yes');
    });
});