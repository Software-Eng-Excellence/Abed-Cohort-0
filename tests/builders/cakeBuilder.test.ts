import { CakeBuilder } from '../../src/model/builders/cake.builder';
import { Cake } from '../../src/model/Cake.model';

describe('CakeBuilder', () => {
    let cakeBuilder: CakeBuilder;

    beforeAll(() => {
        cakeBuilder = new CakeBuilder();
    });

    it('shjould create a cake with all values', () => {
        const cake = cakeBuilder
            .setType('Chocolate')
            .setFlavor('Vanilla')
            .setFilling('Chocolate Ganache')
            .setSize(8)
            .setLayers(2)
            .setFrostingType('Buttercream')
            .setFrostingFlavor('Vanilla')
            .setDecorationType('Fondant')
            .setDecorationColor('Pink')
            .setCustomMessage('Happy Birthday')
            .setShape('Round')
            .setAllergies('Nuts')
            .setSpecialIngredients('Organic')
            .setPackagingType('Box')
            .build();


        expect(cake).toBeInstanceOf(Cake);
        expect(cake.getType()).toBe('Chocolate');
        expect(cake.getFlavor()).toBe('Vanilla');
        expect(cake.getFilling()).toBe('Chocolate Ganache');
        expect(cake.getSize()).toBe(8);
        expect(cake.getLayers()).toBe(2);
        expect(cake.getFrostingType()).toBe('Buttercream');
        expect(cake.getFrostingFlavor()).toBe('Vanilla');
        expect(cake.getDecorationType()).toBe('Fondant');
        expect(cake.getDecorationColor()).toBe('Pink');
        expect(cake.getCustomMessage()).toBe('Happy Birthday');
        expect(cake.getShape()).toBe('Round');
        expect(cake.getAllergies()).toBe('Nuts');
        expect(cake.getSpecialIngredients()).toBe('Organic');
        expect(cake.getPackagingType()).toBe('Box');
    });

    // it('should throw an error if required one fields are missing', () => {
    //     expect(() => {
    //         cakeBuilder
    //             .setType('Chocolate')
    //             .setFlavor('Vanilla')
    //             .setFilling('Chocolate Ganache')
    //             .setSize(8)
    //             .setLayers(2)
    //             .setFrostingType('Buttercream')
    //             .setFrostingFlavor('Vanilla')
    //             .setDecorationType('Fondant')
    //             .setDecorationColor('Pink')
    //             .setCustomMessage('Happy Birthday')
    //             .setShape('Round')
    //             .setAllergies('Nuts')
    //             .setSpecialIngredients('Organic')
    //             .build();
    //     }).toThrow('Missing required field: packagingType');
    // });

    it('should set and retrieve all values correctly', () => {
        cakeBuilder
            .setType('Chocolate')
            .setFlavor('Vanilla')
            .setFilling('Chocolate Ganache')
            .setSize(8)
            .setLayers(2)
            .setFrostingType('Buttercream')
            .setFrostingFlavor('Vanilla')
            .setDecorationType('Fondant')
            .setDecorationColor('Pink')
            .setCustomMessage('Happy Birthday')
            .setShape('Round')
            .setAllergies('Nuts')
            .setSpecialIngredients('Organic')
            .setPackagingType('Box');

        expect(cakeBuilder['type']).toBe('Chocolate');
        expect(cakeBuilder['flavor']).toBe('Vanilla');
        expect(cakeBuilder['filling']).toBe('Chocolate Ganache');
        expect(cakeBuilder['size']).toBe(8);
        expect(cakeBuilder['layers']).toBe(2);
        expect(cakeBuilder['frostingType']).toBe('Buttercream');
        expect(cakeBuilder['frostingFlavor']).toBe('Vanilla');
        expect(cakeBuilder['decorationType']).toBe('Fondant');
        expect(cakeBuilder['decorationColor']).toBe('Pink');
        expect(cakeBuilder['customMessage']).toBe('Happy Birthday');
        expect(cakeBuilder['shape']).toBe('Round');
        expect(cakeBuilder['allergies']).toBe('Nuts');
        expect(cakeBuilder['specialIngredients']).toBe('Organic');
        expect(cakeBuilder['packagingType']).toBe('Box');
    });
});