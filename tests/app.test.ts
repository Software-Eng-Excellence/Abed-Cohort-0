import { FinanceCalculator, Order, OrderManagment, Validator } from '../src/app';

describe('OrderManagment', () => {
    //before all, new validator and calculator
    //before each, new order manager

    let validator: Validator;
    let calculator: FinanceCalculator;

    beforeAll(() => {
        validator = new Validator([]);
        calculator = new FinanceCalculator();
    });

    let orderManager: OrderManagment;
    let basevalidator: (order: Order) => void;

    beforeEach(() => {
        basevalidator = validator.validate;
        validator.validate = jest.fn();
        orderManager = new OrderManagment(validator, calculator);
    });
    afterAll(() => {
        validator.validate = basevalidator;
    });
    it('should add order', () => {

        //Arange
        const item = "sponge";
        const price = 15;

        //Act
        orderManager.addOrder(item, price);

        //Assert
        expect(orderManager.getOrders()).toEqual([{ id: 1, item, price }]);
    });

    it('should get an order', () => {

        //Arange
        const item = "sponge";
        const price = 15;
        orderManager.addOrder(item, price);

        //Act
        const order = orderManager.getOrder(1);

        //Assert
        expect(order).toEqual({ id: 1, item, price });
    });

    it('should call finance calculator to get total revenue', () => {

        //Arange
        const item = "sponge";
        const price = 15;
        orderManager.addOrder(item, price);
        const spy = jest.spyOn(calculator, 'getRevenue');

        //Act
        orderManager.getTotalRevenue();

        //Assert
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith([{ id: 1, item, price }]);
        expect(spy).toHaveReturnedWith(15);

    });

    it("should throw addition exeption if validator does not pass", () => {
        // arange
        const item = "sponge";
        const price = 15;
        (validator.validate as jest.Mock).mockImplementation(() => {
            throw new Error("Invalid Order");
        });


        //act and assert
        expect(() => orderManager.addOrder(item, price)).toThrow("[OrderManagment] error adding order Invalid Order");
    });
});

describe('FinanceCalculator', () => {

    it('should get the total revenue', () => {

        //Arange
        const calculator = new FinanceCalculator();
        const orders = [
            { id: 1, item: "sponge", price: 15 },
            { id: 2, item: "soap", price: 10 },
            { id: 3, item: "shampoo", price: 10 }
        ];

        //Act
        const revenue = calculator.getRevenue(orders);

        //Assert
        expect(revenue).toEqual(35);
    });

    it('should get the avarage buy power', () => {

        //Arange
        const calculator = new FinanceCalculator();
        const orders = [
            { id: 1, item: "sponge", price: 15 },
            { id: 2, item: "soap", price: 10 },
            { id: 3, item: "shampoo", price: 10 }
        ];

        //Act
        const average = calculator.getAverageBuyPower(orders);

        //Assert
        expect(average).toBeCloseTo(11.67, 2);

    });
});

