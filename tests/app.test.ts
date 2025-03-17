import { FinanceCalculator, OrderManagment, Validator } from '../src/app';

describe('OrderManagment', () => {

    it('should add order', () => {

        //Arange
        const validator = new Validator([]);
        const calculator = new FinanceCalculator();
        const orderManager = new OrderManagment(validator, calculator);
        const item = "sponge";
        const price = 15;

        //Act
        orderManager.addOrder(item, price);

        //Assert
        expect(orderManager.getOrders()).toEqual([{ id: 1, item, price }]);
    });

    it('should get an order', () => {

        //Arange
        const validator = new Validator([]);
        const calculator = new FinanceCalculator();
        const orderManager = new OrderManagment(validator, calculator);
        const item = "sponge";
        const price = 15;
        orderManager.addOrder(item, price);

        //Act
        const order = orderManager.getOrder(1);

        //Assert
        expect(order).toEqual({ id: 1, item, price });
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
        expect(average).toEqual(11.67);

    });
});

